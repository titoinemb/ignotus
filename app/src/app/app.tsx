'use client';
import { useEffect, useState } from "react";
import {Home} from "./components/features/Home";
import { initSettings } from "./functions";

export default function Page() {
  const [json, setJson] = useState<any>(null);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const raw = localStorage.getItem("setting");
    initSettings(raw).finally(() => {
      const langSetting = raw ? JSON.parse(raw)?.langue : "en";
      import(`../langs/${langSetting}`).then((module) => {
        setJson(module.default);
        setLang(langSetting);
      });
    });
  }, []);

  if (!json) return <div>Loading...</div>;

  return <Home json={json} lang={lang} />;
}
