use argon2::{Argon2, PasswordHasher};
use argon2::password_hash::SaltString;
use rand::rngs::OsRng;

/*
Return:
  Ok(hash)  = Passowrd crypted
  Err(0)    = no ENCRYPTION_PASSWORD
Input:
  password  = is a String
*/
pub fn crypt(password_to_encrypt: &str) -> Result<String, u8> {
  let salt: SaltString = match SaltString::generate(&mut OsRng) {
    s => s,
  };

  let argon2: Argon2<'_> = Argon2::default();

  match argon2.hash_password(password_to_encrypt.as_bytes(), &salt) {
    Ok(hash)  => Ok(hash.to_string()),
    Err(_)    => Err(0),
  }
}