use actix_web::{Responder,HttpResponse};
use serde_json::json;

pub async fn ping() -> impl Responder {
  HttpResponse::Ok().json(json!({
    "message": "pong"
  }))
}