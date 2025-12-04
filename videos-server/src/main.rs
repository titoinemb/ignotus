use actix_web::{web, App, HttpServer};
use actix_cors::Cors;
use dotenv::dotenv;
mod apis;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  dotenv().ok();

  HttpServer::new(|| {
    App::new()
      .wrap(Cors::default()
        .allow_any_origin()
        .allowed_methods(vec!["GET"])
        .allowed_headers(vec!["Content-Type"])
        .max_age(3600))
      .route("/files/{file:.*}", web::get().to(apis::files::file))
  })
  .bind("127.0.0.1:8181")?
  .run()
  .await
}