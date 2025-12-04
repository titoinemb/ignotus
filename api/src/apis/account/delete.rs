use actix_web::{web,HttpResponse,Responder,Result as ActixResult,error::ErrorInternalServerError,};
use crate::functions::checksession::{validate_session,LoginInput};
use serde_json::json;
use std::env;
use mongodb::{Client,options::ClientOptions,Collection,bson::{doc,Document},};

/**
 * Input:
 *  username    = the username
 *  session     = the token of the session
 * Return:
 *  1           = data sent
 *  2           = session is not valid
 *  3           = server error
 */
pub async fn delete(input: web::Json<LoginInput>) -> ActixResult<impl Responder> {
  let username: &String = &input.username;
  let session: &String = &input.session;
  
  if username.is_empty() || session.is_empty() {
    return Ok(HttpResponse::BadRequest().json(json!({
      "message": "2"
    })));
  }
  // Check the session token
  let result: i32 = match validate_session(username, session).await {
    Ok(res) => res,
    Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
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

      // delete a user by username
      let client_options: ClientOptions = ClientOptions::parse(&url)
        .await
        .map_err(|_| ErrorInternalServerError(json!({"message":"3"})))?;
      let client = Client::with_options(client_options)
        .map_err(|_| ErrorInternalServerError(json!({"message":"3"})))?;

      let db: mongodb::Database = client.database("ignotus");
      let coll: Collection<Document> = db.collection("accounts");

      let filter: Document = doc! { "username": username };
      let delete_result = coll
        .delete_one(filter, None)
        .await
        .map_err(|_| ErrorInternalServerError(json!({"message":"3"})))?;

      if delete_result.deleted_count == 1 {
        Ok(HttpResponse::Ok().json(json!({ "message": "1" }))) // succès
      } else {
        // aucun document trouvé → on considère cela comme une erreur serveur
        Ok(HttpResponse::InternalServerError().json(json!({"message":"3"})))
      }
    }
    2 => Ok(HttpResponse::Unauthorized().json(json!({"message": "2"}))),
    _ => Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
  }
}