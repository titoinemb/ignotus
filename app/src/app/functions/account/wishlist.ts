export const wishlist = async (table: string, id: string) => {
  let idStorage = localStorage.getItem('username');
  let sessionStorage = localStorage.getItem('session');
  let checkBox = document.getElementById("check") as HTMLElement;

  if (!sessionStorage || !table || !id || !idStorage) return;

  var what;

  if(checkBox.style.display === "flex") {
    checkBox.style.display = "none";
    what = "remove";
  } else {
    checkBox.style.display = "flex";
    what = "add";
  };

  return await fetch('http://localhost:8080/account/wishlist/' + what, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: idStorage,
      session: sessionStorage,
      data: {
        table: table,
        id: id
      }
    })
  });
};