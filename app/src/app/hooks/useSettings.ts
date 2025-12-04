'use client';
import { useEffect, useState } from 'react';
import { SettingsState } from "@types";

export const useSettings = () => {
  const [state, setState] = useState<SettingsState>({
    loading: true,
    error: false,
    settingss: [],
    idSession: '',
  });

  useEffect(() => {
    let sessionStorage = localStorage.getItem('session');
    (async () => {
      try {
        if (sessionStorage) {
          const response = await fetch('http://localhost:8080/account/datas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: localStorage.getItem('username'),
              session: sessionStorage
            }),
          });
          const datarep = await response.json();

          if (!response.ok || !datarep || (datarep.message !== "1")) return setState(prevState => ({ ...prevState, error: true }));

          await setState(prevState => ({ ...prevState, idSession: localStorage.getItem('username') as string }))
          await setState(prevState => ({ ...prevState, settingss: sessionStorage as string }))
          return await setState(prevState => ({ ...prevState, settingss: datarep.datas.settings }))
        } else {
          let settingsStorage = localStorage.getItem('setting');

          if (!settingsStorage) {
            let newSettings = JSON.stringify({
              cc: "null",
              kidsMod: {
                actif: false,
                max: 5,
              },
              langue: "fr",
              quality: "1080p",
              skip: {
                intro: true,
                outro: true,
              },
            });

            await localStorage.setItem('setting', newSettings);
            return await setState(prevState => ({ ...prevState, settingss: JSON.parse(newSettings as string) }));
          } else {
            return await setState(prevState => ({ ...prevState, settingss: JSON.parse(settingsStorage as string) }));
          };
        };
      } catch (e) {
        console.log(e)
        return setState(prevState => ({ ...prevState, error: true }));
      } finally {
        return setState(prevState => ({ ...prevState, loading: false }));
      };
    })();
  }, []);

  return state;
};