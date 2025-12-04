use crate::functions::encrypt;
use crate::functions::username;
use crate::functions::password;
use actix_web::{HttpResponse,Responder};
use chrono::NaiveDate;
use mongodb::bson;
use mongodb::{Client,bson::doc,options::ClientOptions};
use serde::{Deserialize,Serialize};
use serde_json::json;
use std::env;

#[derive(Serialize, Deserialize)]
pub struct Session {
  pub name: String,
  pub token: String,
}
#[derive(Serialize, Deserialize)]
pub struct UserData {
  pub username: String,
  pub premium: NaiveDate,
  pub password: Vec<String>,
  pub session: Vec<Session>,
  pub wishlist: Vec<String>,
  pub watchlist: Vec<String>,
  pub settings: Settings,
}
#[derive(Serialize, Deserialize)]
pub struct Settings {
  pub langue: String,
  pub cc: Option<String>,
  pub skip: SkipSettings,
  pub kidsmod: KidsModSettings,
  pub quality: String,
}
#[derive(Serialize, Deserialize)]
pub struct SkipSettings {
  pub intro: bool,
  pub outro: bool,
}
#[derive(Serialize, Deserialize)]
pub struct KidsModSettings {
  pub actif: bool,
  pub max: u32,
}

pub fn encrypt_passwords(passwords: &Vec<String>) -> Vec<String> {
  passwords
    .iter()
    .filter_map(|password: &String| match encrypt::crypt(password) {
      Ok(encrypted) => Some(encrypted),
      Err(_) => None,
    })
    .collect()
}

/**
 * 
 * Return:
 *  1 = account create
 *  2 = account not create
 *  3 = server error
 */
pub async fn create() -> impl Responder {
  // get uri of the bdd
  let url: String = match env::var("MONGODB_URI") {
    Ok(value) => value,
    Err(_) => {
      return HttpResponse::InternalServerError().json(json!({
        "message": "3"
      }));
    },
  };

  let client_options: ClientOptions                   = ClientOptions::parse(&url).await.unwrap();
  let client: Client                                  = Client::with_options(client_options).unwrap();
  let database: mongodb::Database                     = client.database("ignotus");
  let collection: mongodb::Collection<bson::Document> = database.collection("accounts");
  let password_not_crypted: Vec<String>               = password::create();
  let password_crypted: Vec<String>                   = encrypt_passwords(&password_not_crypted);
  let premium_date: NaiveDate                         = NaiveDate::from_ymd_opt(2025, 10, 15).expect("Date should be valid");

  let mut username: String;
    
  loop {
    match username::create("src/words.txt") {
      Ok(gen_username) => {
        username = gen_username;
        // Vérifier si le username existe déjà
        let filter: bson::Document = doc! { "username": &username };
        let existing_user: Option<bson::Document> = collection.find_one(filter, None).await.unwrap();

        // Si on trouve un utilisateur avec ce username, on régénère
        if existing_user.is_none() {
          break; // Un username unique a été trouvé
        }
      },
      Err(_) => {
        return HttpResponse::InternalServerError().json(json!({
          "message": "3"
        }));
      }
    };
  }

  // insert the new user on the bdd
  let user: UserData = UserData {
    username: username.clone(),
    password: password_crypted,
    premium: premium_date,
    session: vec![],
    settings: Settings {
      langue: String::from("en"),
      cc: None,
      kidsmod: KidsModSettings {
        actif: false,
        max: 7,
      },
      quality: String::from("1080p"),
      skip: SkipSettings {
        intro: true,
        outro: true,
      },
  },
    watchlist: vec![],
    wishlist: vec![],
  };

  let insert_result: Result<mongodb::results::InsertOneResult, mongodb::error::Error> = collection
    .insert_one(bson::to_document(&user).unwrap(), None)
    .await;

  // return the result for the creation account
  match insert_result {
    Ok(_) => HttpResponse::Ok()
      .json(json!({
        "message": "1",
        "data": {
          "password": password_not_crypted,
          "username": username.clone()
        }
      })),
    Err(_) => HttpResponse::InternalServerError()
      .json(json!({
        "message": "3"
      })),
  }
}