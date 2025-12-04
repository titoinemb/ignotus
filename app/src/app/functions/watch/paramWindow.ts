export const paramWindow = async() => {
  let parambox = document.getElementById("paramBox") as HTMLElement;

  if (parambox.style.display === "block") {
    return parambox.style.display = "none";
  } else {
    return parambox.style.display = "block";
  };
};