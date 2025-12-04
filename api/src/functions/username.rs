use rand::seq::SliceRandom;
use std::fs;
use std::io::{self, BufRead};

pub fn create(file_path: &str) -> io::Result<String> {
  let file: fs::File = fs::File::open(file_path)?;
  let reader: io::BufReader<fs::File> = io::BufReader::new(file);

  // Collecter les mots dans un vecteur de String
  let words: Vec<String> = reader.lines().filter_map(Result::ok).collect();

  // Vérifier qu'il y a assez de mots
  if words.len() < 3 {
    return Err(io::Error::new(
      io::ErrorKind::InvalidData,
      "The file must contain at least 3 words.",
    ));
  }

  // Sélectionner aléatoirement 3 mots
  let mut rng: rand::prelude::ThreadRng = rand::thread_rng();
  let selected_words: Vec<String> = words.choose_multiple(&mut rng, 3).cloned().collect();

  // Retourner le nom d'utilisateur en les joignant avec un tiret
  Ok(selected_words.join("-"))
}
