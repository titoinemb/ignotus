use actix_web::{web, HttpResponse, Responder, Result as ActixResult};
use serde_json::json;
use crate::functions::checksession::{validate_session, LoginInput};
use mongodb::{Client, options::ClientOptions, Collection, bson::{doc, Document, to_document}};
use serde_json::Value;
use std::env;

/**
 * Input:
 *  username    = the username
 *  session     = the token of the session
 * Return:
 *  1 and datas = datas send
 *  2           = session or username is not valid
 *  3           = server error
*/
pub async fn datas(input: web::Json<LoginInput>) -> ActixResult<impl Responder> {
    let username: &String = &input.username;
    let session: &String = &input.session;

    // Vérification basique
    if username.is_empty() || session.is_empty() {
        return Ok(HttpResponse::BadRequest().json(json!({"message": "2"})));
    }

    // Validation de la session
    let result: i32 = match validate_session(username, session).await {
        Ok(res) => res,
        Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
    };

    match result {
        1 => {
            // Connexion à MongoDB
            let url = match env::var("MONGODB_URI") {
                Ok(value) => value,
                Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
            };

            let client_options = match ClientOptions::parse(&url).await {
                Ok(options) => options,
                Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
            };

            let client = match Client::with_options(client_options) {
                Ok(c) => c,
                Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
            };

            let database = client.database("ignotus");
            let mongo_collection: Collection<Document> = database.collection("accounts");

            // Filtre Mongo
            let filter = doc! { "username": username };

            // Recherche de l'utilisateur
          match mongo_collection.find_one(filter, None).await {
              Ok(Some(account_doc)) => {
                  // Étape 1 : Convertir le document BSON
                  let bson_doc: Document = match to_document(&account_doc) {
                      Ok(doc) => doc,
                      Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
                  };

                  // Étape 2 : Convertir en JSON
                  let json_account: Value = match serde_json::to_value(&bson_doc) {
                      Ok(val) => val,
                      Err(_) => return Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
                  };

                  Ok(HttpResponse::Ok().json(json!({
                      "message": "1",
                      "datas": json_account
                  })))
              },
              Ok(None) => Ok(HttpResponse::NotFound().json(json!({"message": "2"}))),
              Err(e) => {
                  println!("Mongo error: {}", e);
                  Ok(HttpResponse::InternalServerError().json(json!({"message": "3"})))
              }
          }
        },
        2 => Ok(HttpResponse::Unauthorized().json(json!({"message": "2"}))),
        _ => Ok(HttpResponse::InternalServerError().json(json!({"message": "3"}))),
    }
}
