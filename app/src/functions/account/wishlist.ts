export const wishlist = async (table: string, id: string) => {
  let idStorage = localStorage.getItem('id');
  let sessionStorage = localStorage.getItem('session');
  let checkBox = document.getElementById("check") as HTMLElement;

  if (!sessionStorage || !table || !id) return;

  var what;

  if(checkBox.style.display === "flex") {
    checkBox.style.display = "none";
    what = "2";
  } else {
    checkBox.style.display = "flex";
    what = "1";
  };

  return await fetch('http://10.0.0.157:8080/account', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      't': "7",
      'w': what,
      'i': idStorage as string,
      's': sessionStorage as string,
      't2': table,
      'i2': id,
    },
  });
};