use actix_web::{web, HttpResponse, Responder, Result as ActixResult};
use futures_util::TryStreamExt;
use mongodb::{bson::{doc, Document},options::ClientOptions,Client,};
use serde::{Deserialize, Serialize};
use serde_json::json;
use std::env;

/// Payload
#[derive(Serialize, Deserialize)]
pub struct Search {
  pub search: String,
}

/**
 * Search movies/series
 * 1 + data = best result
 * 2        = server error
 */
pub async fn data(input: web::Json<Search>) -> ActixResult<impl Responder> {
  let search: &String = &input.search;
  if search.is_empty() {
  return Ok(HttpResponse::BadRequest().json(json!({ "message": "2" })));
  }

  // ---------- MongoDB connection ----------
  let url: String = match env::var("MONGODB_URI") {
    Ok(v) => v,
    Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({ "message": "2" }))),
  };

  let client_options = match ClientOptions::parse(&url).await {
    Ok(o) => o,
    Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({ "message": "2" }))),
  };

  let client = match Client::with_options(client_options) {
    Ok(c) => c,
    Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({ "message": "2" }))),
  };

  // ---------- preparation ----------
  let db: mongodb::Database = client.database("ignotus");
  let tables: [&str; 2] = ["movies", "series"];
  let langs: [&str; 15] = [
    "fr", "en", "es", "jp", "de", "it", "pt", "ru", "zh",
    "ar", "hi", "ko", "nl", "sv", "tr",
  ];

  // regex used in $match (full BSON regex)
  let bson_regex: Document = doc! { "$regex": search, "$options": "i" };
  // plain string for $regexMatch
  let plain_regex: String = search.clone();

  // fields for $match
  let mut match_fields: Vec<Document> = Vec::new();
  for lang in &langs {
    match_fields.push(doc! { format!("data.{}.title", lang): &bson_regex });
    match_fields.push(doc! { format!("data.{}.description", lang): &bson_regex });
  }

  // relevance expression (title = 2, description = 1)
  let mut relevance_expr: Vec<Document> = Vec::new();
  for lang in &langs {
    relevance_expr.push(doc! {
      "$cond": [
        {
          "$regexMatch": {
            "input": { "$ifNull": [ format!("$data.{}.title", lang), "" ] },
            "regex": plain_regex.clone()
          }
        },
        2,
        0
      ]
    });
    relevance_expr.push(doc! {
      "$cond": [
        {
          "$regexMatch": {
            "input": { "$ifNull": [ format!("$data.{}.description", lang), "" ] },
            "regex": plain_regex.clone()
          }
        },
        1,
        0
      ]
    });
  }

  // ---------- aggregation ----------
  let mut results: Vec<Document> = Vec::new();

  for table in &tables {
    let coll: mongodb::Collection<Document> = db.collection::<Document>(table);

    let pipeline: Vec<Document> = vec![
      doc! { "$match": { "$or": match_fields.clone() } },
      doc! { "$addFields": { "relevance": doc! { "$add": relevance_expr.clone() } } },
      doc! { "$sort": { "relevance": -1 } },
      doc! { "$limit": 50 },
    ];

    match coll.aggregate(pipeline, None).await {
      Ok(cursor) => {
        let docs: Vec<Document> = cursor.try_collect().await.unwrap_or_default();
        results.extend(docs);
      }
      Err(e) => {
        // directly return the error without logging
        return Ok(HttpResponse::InternalServerError().json(json!({
          "message": "2",
          "detail": format!("{}", e)
        })));
      }
    };
  }

  // ---------- final sorting ----------
  results.sort_by(|a, b| {
    let ra: i32 = a.get_i32("relevance").unwrap_or(0);
    let rb: i32 = b.get_i32("relevance").unwrap_or(0);
    rb.cmp(&ra)
  });
  let top: Vec<Document> = results.into_iter().take(10).collect();

  // ---------- success ----------
  Ok(HttpResponse::Ok().json(json!({
    "message": "1",
    "data": top
  })))
}