let keysTxt = "";

export const createAccount = async () => {
  try {
    const response = await fetch('http://localhost:8080/account/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const datarep = await response.json();

    if (!response.ok || !datarep || (datarep.message !== "1")) return window.location.href = "";

    const keys = (datarep.data.password as string[]) || [];
    const username = datarep.data.username

    for (let i = 0; i < keys.length; i++) {
      keysTxt += (i === 0 ? "" : " ") + keys[i];

      const el = document.getElementById(`word0Reg`);
      if (!el) continue;
      
      (el as HTMLInputElement).value += (i === 0 ? "" : " ") + keys[i];
    };

    const el2 = document.getElementById('word2Reg') as HTMLInputElement;
    el2.value = username;

    const createReg = document.getElementById("createReg");
    if (createReg) createReg.style.display = "none";
    const security = document.getElementById("security");
    if (security) security.style.display = "none";
    const save = document.getElementById("save");
    if (save) save.style.display = "block";
    const words2 = document.getElementById("words2");
    if (words2) words2.style.removeProperty("display");
    const savebtn = document.getElementById("savebtn");
    if (savebtn) savebtn.style.display = "block";
    const words3 = document.getElementById("words3");
    if (words3) words3.style.removeProperty("display");
    const desc = document.getElementById("desc");
    if (desc) desc.style.removeProperty("display");
    const desc2 = document.getElementById("desc2");
    if (desc2) desc2.style.removeProperty("display");

    return;
  } catch (e) {
    return window.location.href = "";
  };
};

export const saveKeys = async () => {
  if (!keysTxt) return;
  document.getElementById("saveok")!.style.display = "block";
  return await navigator.clipboard.writeText(keysTxt);
};