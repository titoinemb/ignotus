import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header, Footer } from './components/layout';
import { Account, Error404, Home, Item, Search, Settings, Watch } from "./components/features";
import { initSettings } from './functions';
import '../styles/all.scss';

const App = () => {
  const [json, setJson] = useState(null);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const raw = localStorage.getItem('setting');

    initSettings(raw).finally(() => {
      const langSetting = (raw ? JSON.parse(raw)?.langue : undefined) ?? 'en';
      import(`../langs/${langSetting}`).then((module) => {
        setJson(module.default);
        setLang(langSetting);
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Your Next.js App</title> {/* Personnalisez le titre de l'application */}
      </Head>
      {typeof window !== "undefined" && window.location.pathname !== "/watch" && <Header json={json} lang={lang} />}
      
      {/* Utilisation des routes basées sur les fichiers */}
      {(() => {
        const path = window.location.pathname;
        
        switch (path) {
          case '/':
            return <Home json={json} lang={lang} />;
          case '/account':
            return <Account json={json} lang={lang} />;
          case '/search':
            return <Search json={json} lang={lang} />;
          case '/settings':
            return <Settings json={json} lang={lang} />;
          case '/item':
            return <Item json={json} lang={lang} />;
          case '/watch':
            return <Watch json={json} lang={lang} />;
          default:
            return <Error404 json={json} lang={lang} />;
        }
      })()}
      
      {typeof window !== "undefined" && window.location.pathname !== "/watch" && <Footer json={json} lang={lang} />}
    </>
  );
};

export default App;
