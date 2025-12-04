use mongodb::{options::ClientOptions,Client,Collection,};
use mongodb::bson::{doc,Document,Bson};
use futures_util::stream::StreamExt;
use serde::Deserialize;
use crate::functions::verifcrypt;
use std::env;
use actix_web::error::ErrorInternalServerError;
use actix_web::Result as ActixResult;

#[derive(Deserialize)]
pub struct LoginInput {
  pub session: String,
  pub username: String,
}

/**
 * Input:
 *  username  = the username
 *  session   = the token of the session 
 * Return:
 *  Ok(1) if session is valid
 *  Ok(2) if session is not valid.
 */
pub async fn validate_session(username: &str, session: &str) -> ActixResult<i32> {
  let url: String = env::var("MONGODB_URI").map_err(|_| {
    ErrorInternalServerError("Failed to read database URL.")
  })?;

  let mut client_opts: ClientOptions = ClientOptions::parse(&url)
    .await
    .map_err(ErrorInternalServerError)?;
  client_opts.app_name = Some("DuckAuth".to_string());

  let client: Client = Client::with_options(client_opts)
    .map_err(ErrorInternalServerError)?;

  let coll: Collection<Document> = client.database("ignotus").collection("accounts");
  let filter: Document = doc! { "username": username };
  let mut cursor: mongodb::Cursor<Document> = coll.find(filter, None).await.map_err(ErrorInternalServerError)?;

  while let Some(doc_res) = cursor.next().await {
    let doc: Document = doc_res.map_err(ErrorInternalServerError)?;
    let session_field: Option<&Bson> = doc.get("session");

    let hashes: Box<dyn Iterator<Item = &str>> = match session_field {
      Some(Bson::Document(single)) => {
        let h: &str = single.get_str("token").unwrap_or("");
        Box::new(std::iter::once(h))
      }
      Some(Bson::Array(arr)) => {
        let iter = arr.iter().filter_map(|elem| {
          if let Bson::Document(doc) = elem {
            doc.get_str("token").ok()
          } else {
            None
          }
        });
        Box::new(iter)
      }
      _ => continue,
    };

    for stored_hash in hashes {
      if let Ok(1) = verifcrypt::decrypt(session, stored_hash) {
        return Ok(1);
      }
    }
  }

  Ok(2)
}
