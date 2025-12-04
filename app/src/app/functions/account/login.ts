function error2 () {
  document.getElementById("error2")!.style.display = "block";
  document.getElementById("error1")!.style.display = "none";
  return;
};

export const login = async () => {
  let input           = document.getElementById(`word1`) as HTMLInputElement;
  let inputUsername   = document.getElementById(`word2`) as HTMLInputElement
  let keys: string[]  = input.value.split(/\s+/).filter(s => s.length > 0);

  if(keys.length !== 12) return document.getElementById("error1")!.style.display = "block";

  try {
    const response = await fetch('http://localhost:8080/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: inputUsername.value, password: keys }),
    });

    const datarep = await response.json();


    if (!response.ok || datarep.message !== "1") return error2();

    localStorage.setItem('session', datarep.token)
    localStorage.setItem('username', datarep.username)

    return window.location.href = "";
  } catch (e) {
    return error2();
  };
};