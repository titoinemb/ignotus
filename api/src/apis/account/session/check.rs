use actix_web::{web,HttpResponse,Responder,Result as ActixResult};
use serde_json::json;
use crate::functions::checksession::{validate_session,LoginInput};

/**
 * Input:
 *  username  = the username
 *  session   = the token of the session
 * Return:
 *  1 = session is valid
 *  2 = session is not valid
*/
pub async fn check(input: web::Json<LoginInput>) -> ActixResult<impl Responder> {
  let username: &String = &input.username;
  let session: &String = &input.session;
  
  if username.is_empty() || session.is_empty() {
    return Ok(HttpResponse::BadRequest().json(json!({
      "message": "2"
    })));
  }

  let result: i32 = validate_session(username, session).await?;

  Ok(HttpResponse::Ok().json(json!({
    "message": result.to_string()
  })))
}