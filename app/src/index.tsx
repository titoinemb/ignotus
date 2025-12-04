import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Header, Footer } from './components/layout';
import "./styles/all.scss";
import { Home, Search, Item, Error404, Watch, Settings, Account } from './components/features';
import { initSettings } from "./functions"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const raw = localStorage.getItem('setting');

initSettings(raw).finally(() => {
  const lang = (raw ? (JSON.parse(raw) as { langue?: string | null })?.langue : undefined) ?? 'en';
  const json = require('../langs/' + lang).default;

  root.render(
    <Router>
      {window.location.pathname !== "/watch" && <Header json={json} lang={lang} />}

      <Routes>
        <Route path="/" element={<Home json={json} lang={lang} />} />
        <Route path="/account" element={<Account json={json} lang={lang} />} />
        <Route path="/search" element={<Search json={json} lang={lang} />} />
        <Route path="/settings" element={<Settings json={json} lang={lang} />} />
        <Route path="/item" element={<Item json={json} lang={lang} />} />
        <Route path="/watch" element={<Watch json={json} lang={lang}/>} />
        <Route path="*" element={<Error404 json={json} lang={lang} />} />
      </Routes>
      
      {window.location.pathname !== "/watch" && <Footer json={json} lang={lang} />}
    </Router>
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();