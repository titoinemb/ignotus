use actix_web::{HttpResponse, Responder, Result as ActixResult, error::ErrorInternalServerError};
use futures_util::StreamExt;
use mongodb::{Client,bson::{Document, doc},options::ClientOptions,};
use serde_json::json;
use std::env;

/**
 * Get random data for home page
 * Return:
 *  1 and data  = data send
 *  2           = server error
 */
pub async fn data() -> ActixResult<impl Responder> {
  let url: String = match env::var("MONGODB_URI") {
    Ok(v) => v,
    Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({ "message": "2" }))),
  };

  let client_options: ClientOptions = ClientOptions::parse(url)
    .await
    .map_err(|_| ErrorInternalServerError("err"))?;
  let client: Client =
    Client::with_options(client_options).map_err(|_| ErrorInternalServerError("err"))?;
  let db: mongodb::Database = client.database("ignotus");

  async fn get_random_data(
    db: &mongodb::Database,
    max: i64,
    table: &str,
  ) -> Result<serde_json::Value, ()> {
    let collection_name = if table == "All" {
      let v: [&str; 2] = ["movies", "series"];
      let idx: usize = rand::random::<usize>() % 2;
      v[idx].to_string()
    } else {
      table.to_string()
    };

    let coll: mongodb::Collection<Document> = db.collection::<Document>(&collection_name);
    let pipeline: Vec<Document> = vec![doc! { "$sample": { "size": max } }];

    let mut cursor: mongodb::Cursor<Document> = coll.aggregate(pipeline, None).await.map_err(|_| ())?;
    let mut arr: Vec<Document> = vec![];

    while let Some(res) = cursor.next().await {
      if let Ok(doc) = res {
        arr.push(doc);
      }
    }

    Ok(json!(arr))
  }

  async fn get_random_data_by_genre(
    db: &mongodb::Database,
    max: i64,
    table: &str,
    genre: i32,
  ) -> Result<serde_json::Value, ()> {
    let mut collection_name = if table == "All" {
      let v: [&str; 2] = ["movies", "series"];
      let idx: usize = rand::random::<usize>() % 2;
      v[idx].to_string()
    } else {
      table.to_string()
    };

    let match_stage: Document = doc! {
      "$match": {
        "$or": [
          { "genres": genre },
          { "genres": { "$in": [ genre ] } }
        ]
      }
    };

    let mut arr: Vec<Document> = {
      let coll: mongodb::Collection<Document> = db.collection::<Document>(&collection_name);
      let pipeline: Vec<Document> = vec![match_stage.clone(), doc! { "$sample": { "size": max } }];

      let mut cursor: mongodb::Cursor<Document> = coll.aggregate(pipeline, None).await.map_err(|_| ())?;
      let mut a: Vec<Document> = vec![];

      while let Some(res) = cursor.next().await {
        if let Ok(doc) = res {
          a.push(doc);
        }
      }

      a
    };

    if arr.is_empty() && table == "All" {
      collection_name = if collection_name == "movies" {
        "series".into()
      } else {
        "movies".into()
      };

      let coll: mongodb::Collection<Document> = db.collection::<Document>(&collection_name);
      let pipeline: Vec<Document> = vec![match_stage, doc! { "$sample": { "size": max } }];

      let mut cursor: mongodb::Cursor<Document> = coll.aggregate(pipeline, None).await.map_err(|_| ())?;
      arr.clear();

      while let Some(res) = cursor.next().await {
        if let Ok(doc) = res {
          arr.push(doc);
        }
      }
    }

    Ok(json!(arr))
  }

  let table: &str = "All";

  let data1: serde_json::Value = get_random_data(&db, 1, table).await.unwrap_or(json!(0));
  let data2: serde_json::Value = get_random_data_by_genre(&db, 10, table, 0)
    .await
    .unwrap_or(json!(0));
  let data3: serde_json::Value = get_random_data_by_genre(&db, 10, table, 1)
    .await
    .unwrap_or(json!(0));
  let data4: serde_json::Value = get_random_data_by_genre(&db, 10, table, 2)
    .await
    .unwrap_or(json!(0));
  let data5: serde_json::Value = get_random_data_by_genre(&db, 10, table, 3)
    .await
    .unwrap_or(json!(0));

  Ok(HttpResponse::Ok().json(json!({
    "message": "1",
    "data1": data1,
    "data2": data2,
    "data3": data3,
    "data4": data4,
    "data5": data5
  })))
}