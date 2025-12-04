'use client';
import { useEffect, useState } from 'react';
import { initSettings } from '../functions';

export function useJson() {
  const [json, setJson] = useState<any>(null);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const raw = localStorage.getItem('setting');

    initSettings(raw).finally(() => {
      const langSetting = (raw ? JSON.parse(raw)?.langue : undefined) ?? 'en';

      import(`../../langs/${langSetting}`)
        .then((module) => {
          setJson(module.default);
          setLang(langSetting);
        })
        .catch(() => {
          console.error("Lang file not found");
        });
    });
  }, []);

  return { json, lang };
}