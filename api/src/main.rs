use actix_web::{web,App,HttpServer};
use actix_cors::Cors;
use dotenv::dotenv;
mod functions;

mod apis {
  pub mod account {
    pub mod create;
    pub mod datas;
    pub mod delete;
    pub mod edit;
    pub mod login;

    pub mod session {
      pub mod check;
      pub mod remove;
    }

    pub mod wishlist {
      pub mod add;
      pub mod remove;
    }
  }
  
  pub mod utils {
    pub mod item;
    pub mod ping;
    pub mod search;
    pub mod home;
  }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  dotenv().ok();

  HttpServer::new(|| {
    App::new()
    .wrap(
        Cors::default()
            .allow_any_origin() // pour dev
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
            .allowed_headers(vec!["CONTENT_TYPE", "ACCEPT"])
            .max_age(3600)
    )
      .route("/ping",                     web::get().to(apis::utils::ping::ping))
      .route("/item",                     web::post().to(apis::utils::item::data))
      .route("/search",                   web::post().to(apis::utils::search::data))
      .route("/home",                     web::get().to(apis::utils::home::data))
      .route("/account/create",           web::post().to(apis::account::create::create))
      .route("/account/login",            web::post().to(apis::account::login::login))
      .route("/account/datas",            web::post().to(apis::account::datas::datas))
      .route("/account/edit",             web::delete().to(apis::account::edit::edit))
      .route("/account/delete",           web::delete().to(apis::account::delete::delete))
      .route("/account/wishlist/add",     web::post().to(apis::account::wishlist::add::add))
      .route("/account/wishlist/remove",  web::post().to(apis::account::wishlist::remove::remove))
      .route("/account/session/check",    web::post().to(apis::account::session::check::check))
      .route("/account/session/remove",   web::delete().to(apis::account::session::remove::remove))

  })
  .bind("127.0.0.1:8080")?
  .run()
  .await
}

#[cfg(test)]
mod tests {
  use super::functions;

  #[test]
  fn test_encrypt() {
    let exemple_password: &str = "bonjour!";

    match functions::encrypt::crypt(exemple_password) {
      Ok(hashed) => {
        println!("Mot de passe chiffré : {}", hashed);
        assert!(hashed.starts_with("$argon2"));
      }
      Err(e) => panic!("Erreur de cryptage : {}", e),
    }
  }

  #[test]
  fn test_decrypt() {
    let crypted_password: &str    = "$argon2id$v=19$m=4096,t=3,p=1$2sbB16R/XnLETs+n/DgicQ$mfQHaPBWA6uxqiCG5qpwNSmf8lu6WI/7DvA9jqpfhVY";
    let decrypted_password: &str  = "bonjour!";

    match functions::verifcrypt::decrypt(decrypted_password, crypted_password) {
      Ok(1)           => println!("It's the same password"),
      Ok(2)           => println!("Not the same password"),
      Ok(other)   => println!("Unexpected return code: {other}"),
      Err(e)   => println!("Error: {e}"),
    }
  }

  #[test]
  fn test_password() {
    let password: Vec<String> = functions::password::create();

    println!("{:?}", password);
  }

  #[test]
  fn test_username() {
    match functions::username::create("src/words.txt") {
      Ok(username) => println!("Name : {}", username),
      Err(e)        => eprintln!("Erreur : {}", e),
    }
  }
}