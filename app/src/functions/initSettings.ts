export const initSettings = async (raw: any) => {
  if (!raw) {
    const newSettings = JSON.stringify({
      cc: "null",
      kidsMod: { actif: false, max: 5 },
      langue: "en",
      quality: "1080p",
      skip: { intro: true, outro: true },
    });
    await Promise.resolve(localStorage.setItem("setting", newSettings));
    window.location.reload();
    return;
  };
};