use actix_web::{web,HttpResponse,Responder,Result as ActixResult,error::ErrorInternalServerError,};
use serde_json::{json,Value};
use crate::functions::checksession::validate_session;
use mongodb::{Client,options::ClientOptions,Collection,bson::{self,doc,Document},};
use serde::{Deserialize,Serialize};
use std::env;

// Structure for the login input
#[derive(Serialize, Deserialize)]
pub struct LoginInput {
  pub session: String,
  pub username: String,
  pub datas: Value,
}

/**
 * Input:
 *  username    = the username
 *  session     = the token of the session
 *  datas       = new settings data
 * Return:
 *  1           = data sent
 *  2           = session is not valid
 *  3           = server error
 */
pub async fn edit(input: web::Json<LoginInput>) -> ActixResult<impl Responder> {
  let username: &String = &input.username;
  let session: &String = &input.session;
  let datas:&Value  = &input.datas;
  
  if username.is_empty() || session.is_empty() || datas.as_object().unwrap().is_empty() {
    return Ok(HttpResponse::BadRequest().json(json!({
      "message": "2"
    })));
  }
  // Check the session token
  let result: i32 = match validate_session(username, session).await {
    Ok(res) => res,
    Err(_) => {
      return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"})));
    }
  };

  match result {
    1 => {
      // Connect to the database
      let url: String = match env::var("MONGODB_URI") {
        Ok(value) => value,
        Err(_) => {
          return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"})));
        }
      };

      // Create a MongoDB client
      let client_options = ClientOptions::parse(&url)
        .await
        .map_err(|_| {
          ErrorInternalServerError(json!({"message": "3"}))
        })?;
      let client: Client = Client::with_options(client_options)
        .map_err(|_| {
          ErrorInternalServerError(json!({"message": "3"}))
        })?;

      // Obtain the collection from the database
      let database: mongodb::Database = client.database("ignotus"); // Your database name
      let collection: Collection<Document> =
          database.collection("accounts"); // Your collection name

      // Prepare to update current settings in the database with &input.datas
      let filter: Document = doc! { "username": username }; // Filter for finding the document to update

      // Manually convert `Value` to `Bson`
      let bson_data: bson::Bson = bson::to_bson(datas)
        .map_err(|_| {
          ErrorInternalServerError(json!({"message": "3"}))
        })?;

      // Create update document
      let update: Document = doc! { "$set": { "settings": bson_data } }; // Use the Bson data

      // Perform the update operation with None as third argument for options
      let update_result: mongodb::results::UpdateResult = collection
        .update_one(filter, update, None)
        .await
        .map_err(|_| {
          ErrorInternalServerError(json!({"message": "3"}))
        })?;

      // Check if the update was successful
      if update_result.modified_count > 0 {
        Ok(HttpResponse::Ok().json(json!({
          "message": "1" // Return a message confirming data was sent
        })))
      } else {
        Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))) // Error if no documents were modified
      }
    }
    2 => Ok(HttpResponse::Unauthorized().json(json!({"message": "2"}))),
    _ => Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
  }
}
