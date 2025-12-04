use actix_web::{web,HttpResponse,Responder,Result as ActixResult,error::ErrorInternalServerError,};
use serde_json::{json};
use crate::functions::checksession::validate_session;
use mongodb::{Client,options::ClientOptions,Collection,bson::{doc,Document},};
use serde::{Deserialize,Serialize};
use std::env;

// Structure for the login input
#[derive(Serialize, Deserialize)]
pub struct WishlistAdd {
  pub session: String,
  pub username: String,
  pub data: WishlistData
}
#[derive(Serialize, Deserialize)]
pub struct WishlistData {
  pub table: String, // Changed to String as &str is generally used in references
  pub id: String,    // Changed to String for the same reason
}

/**
 * Input:
 *  username      = the username
 *  session       = the token of the session
 *  table         = the name of table (movies/series)
 *  itemId        = the item of id in table       
 * Return:
 *  1             = data sent
 *  2             = session is not valid
 *  3             = server error
 */
pub async fn add(input: web::Json<WishlistAdd>) -> ActixResult<impl Responder> {
  let username: &String = &input.username;
  let session: &String = &input.session;
  let table: &String = &input.data.table;
  let id: &String = &input.data.id;
  
  if username.is_empty() || session.is_empty() || table.is_empty() || id.is_empty() {
    return Ok(HttpResponse::BadRequest().json(json!({
      "message": "2"
    })));
  }

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
      let update: Document = doc! { "$push": { "wishlist": { "table": table, "id": id } } };


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