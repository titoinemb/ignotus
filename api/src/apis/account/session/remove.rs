use actix_web::{web,HttpResponse,Responder,Result as ActixResult};
use mongodb::{bson::{doc,Document},options::{ClientOptions,UpdateOptions},Client, Collection,};
use serde::Deserialize;
use serde_json::json;
use std::env;
use crate::functions::checksession::validate_session;

#[derive(Deserialize)]
pub struct LoginInput {
  pub username: String,
  pub session: String,
  pub sessionid: String,
}

/**
 * Input:
 *  username  = the username
 *  session   = the token of the session
 *  sessionid = the session to delete
 * Return:
 *  1 = session deleted
 *  2 = session is not valid
 *  3 = server error
*/
pub async fn remove(input: web::Json<LoginInput>) -> ActixResult<impl Responder> {
  let username: &String = &input.username;
  let session: &String = &input.session;
  let sessionid: &String = &input.sessionid;
  
  if username.is_empty() || session.is_empty() || sessionid.is_empty() {
    return Ok(HttpResponse::BadRequest().json(json!({
      "message": "2"
    })));
  }

  // check the session token
  let validation: i32 = match validate_session(username, session).await {
    Ok(v) => v,
    Err(_) => {
      return Ok(HttpResponse::InternalServerError().json(json!({ "message": "2" })));
    }
  };

  if validation != 1 {
    return if validation == 2 {
      Ok(HttpResponse::Unauthorized().json(json!({ "message": "2" })))
    } else {
      Ok(HttpResponse::InternalServerError().json(json!({ "message": "3" })))
    };
  }

  let uri: String = match env::var("MONGODB_URI") {
    Ok(v) => v,
    Err(_) => {
      return Ok(HttpResponse::InternalServerError().json(json!({ "message": "3" })));
    }
  };

  let client_opts: ClientOptions = match ClientOptions::parse(&uri).await {
    Ok(o) => o,
    Err(_) => {
      return Ok(HttpResponse::InternalServerError().json(json!({ "message": "3" })));
    }
  };

  let client: Client = match Client::with_options(client_opts) {
    Ok(c) => c,
    Err(_) => {
      return Ok(HttpResponse::InternalServerError().json(json!({ "message": "3" })));
    }
  };

  let collection: Collection<Document> = client.database("ignotus").collection("accounts");

  let idx: usize = match sessionid.parse() {
    Ok(i) => i,
    Err(_) => {
      return Ok(HttpResponse::BadRequest().json(json!({ "message": "Invalid session ID format" })));
    }
  };

  let filter: Document = doc! { "username": username };

  let unset_update: Document = doc! {
    "$unset": { format!("session.{}", idx): "" }
  };

  if let Err(_) = collection
    .update_one(filter.clone(), unset_update, UpdateOptions::default())
    .await
  {
    return Ok(HttpResponse::InternalServerError().json(json!({ "message": "3" })));
  }

  let pull_update: Document = doc! {
    "$pull": { "session": null }
  };

  if let Err(_) = collection
    .update_one(filter, pull_update, UpdateOptions::default())
    .await
  {
    return Ok(HttpResponse::InternalServerError().json(json!({ "message": "3" })));
  }

  Ok(HttpResponse::Ok().json(json!({ "message": "1" })))
}
