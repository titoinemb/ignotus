export const settingsFunction = async (what: number) => {
  if(!what) return;
  
  let all = document.getElementById("boxAll") as HTMLElement;
  let quality = document.getElementById("boxQuality") as HTMLElement;
  let cc = document.getElementById("boxcc") as HTMLElement;
  let langue = document.getElementById("boxlang") as HTMLElement;

  if(what === 1) {
    all.style.display = "none";
    quality.style.display = "flex";
    return;
  };

  if(what === 2) {
    all.style.display = "block";
    quality.style.display = "none";
    cc.style.display = "none";
    langue.style.display = "none";
    return;
  };

  if(what === 3) {
    all.style.display = "none";
    langue.style.display = "flex";
    return;
  };

  if(what === 4) {
    all.style.display = "none";
    cc.style.display = "flex";
    return;
  };

  return;
};