use argon2::{password_hash::{PasswordHash,PasswordVerifier,Error as PwHashError},Argon2,};

/*
Return:
  Ok(1)     = it's the same password
  Ok(2)     = not the same password
  Err(e)    = Error to verify
Input:
  password  = is a String
  password2 = the password crypted
*/
pub fn decrypt(password: &str, hash: &str) -> Result<u8, PwHashError> {
  let parsed_hash: PasswordHash<'_> = PasswordHash::new(hash)?;
  let argon2: Argon2<'_> = Argon2::default();

  match argon2.verify_password(password.as_bytes(), &parsed_hash) {
    Ok(()) => Ok(1),
    Err(PwHashError::Password) => Ok(2),
    Err(e) => Err(e),
  }
}