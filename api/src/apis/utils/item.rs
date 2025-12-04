use actix_web::{web,HttpResponse,Responder,Result as ActixResult,error::ErrorInternalServerError,};
use serde_json::{json};
use mongodb::{Client,options::ClientOptions,Collection,bson::{doc,Document,oid::ObjectId},};
use serde::{Deserialize,Serialize};
use std::env;

// Structure item data
#[derive(Serialize, Deserialize)]
pub struct Item {
  pub table: String,
  pub id: String,
}

/**
 * Get movies/series data
 * Return:
 *  1 and data  = data send
 *  2           = this item dont existe
 *  3           = server error
 */
pub async fn data(input: web::Json<Item>) -> ActixResult<impl Responder> {
  let table: &String = &input.table;
  let id: &String = &input.id;
  
  if table.is_empty() || id.is_empty() {
    return Ok(HttpResponse::BadRequest().json(json!({
      "message": "2"
    })));
  }

  let url: String = match env::var("MONGODB_URI") {
  Ok(value) => value,
    Err(_) => {
      return Ok(HttpResponse::InternalServerError().json(json!({
        "message": "2"
      })));
    },
  };

  let client_options: ClientOptions = ClientOptions::parse(&url)
    .await
    .map_err(|_| ErrorInternalServerError(json!({ "message": "3" })))?;

  let client: Client = Client::with_options(client_options)
    .map_err(|_| ErrorInternalServerError(json!({ "message": "3" })))?;

  let collection: Collection<Document> = client
    .database("ignotus")
    .collection(table);

  let obj_id = ObjectId::parse_str(id)
      .map_err(actix_web::error::ErrorBadRequest)?;

  let filter: Document = doc! { "_id":  obj_id};

  let maybe_doc = collection
    .find_one(filter, None)
    .await
    .map_err(|e| ErrorInternalServerError(json!({ "message": e.to_string() })))?;

  match maybe_doc {
    Some(doc) => Ok(HttpResponse::Ok().json(json!({
      "message": "1",
      "data": doc
    }))),
    None => Ok(HttpResponse::NotFound().json(json!({"message": "2"}))),
  }
}