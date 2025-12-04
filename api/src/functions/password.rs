use rand::Rng;

pub fn create() -> Vec<String> {
  let mut random_words: Vec<String> = Vec::new();
  let characters: &'static str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  let mut rng = rand::thread_rng();

  for _ in 0..12 {
    let random_string: String = (0..10)
      .map(|_| {
        let random_index = rng.gen_range(0..characters.len());
        characters.chars().nth(random_index).unwrap()
      })
      .collect();

    random_words.push(random_string);
  }

  random_words
}