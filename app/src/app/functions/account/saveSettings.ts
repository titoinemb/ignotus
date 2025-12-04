export const saveSettings = async (username: string) => {
  const qualityEl = document.getElementById('qualitys') as HTMLSelectElement | null;
  const langEl = document.getElementById('lang') as HTMLSelectElement | null;
  const langCCEl = document.getElementById('langCC') as HTMLSelectElement | null;
  const skipIntroEl = document.getElementById('skipIntro') as HTMLSelectElement | null;
  const skipOutroEl = document.getElementById('skipoutro') as HTMLSelectElement | null;

  let session = localStorage.getItem("session");

  const toBool = (s: string | null | undefined, defaultVal = false) => {
    if (s == null) return defaultVal;
    switch (s.trim().toLowerCase()) {
      case 'true':
        return true;
      case 'false':
        return false;
    };
  };

  const payload = {
    quality: qualityEl?.value,
    langue: langEl?.value,
    cc: langCCEl?.value,
    skip: {
      intro: toBool(skipIntroEl?.value, true),
      outro: toBool(skipOutroEl?.value, true),
    },
    kidsMod: {
      actif: false,
      max: 5,
    },
  };

  if (session) {
    await fetch('http://localhost:8080/account/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session: session,
        username: username,
        datas: payload
      })
    });
  };

  await localStorage.setItem("setting", JSON.stringify(payload));
  await window.location.reload();
  return;
};
