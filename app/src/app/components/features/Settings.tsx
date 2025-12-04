import { Loading, Error500 } from '../layout';
import '../../styles/settings.scss'
import { saveSettings } from '../../functions';
import { Props } from '@types';
import { useSettings } from "../../hooks/useSettings";

export const Settings: React.FC<Props> = ({ json, lang }) => {
  const { error, idSession, loading, settingss } = useSettings();

  if (loading) return <Loading />;
  if (error === true) return <Error500 lang={lang} json={json} />;

  return (
    <div className='app'>
      <div className="title">{json.settings.txt1}</div>
      <div className="list">
        <div className="section">
          <div className="title2">{json.watch.txt1}</div>
          <select name="qualitys" id="qualitys" defaultValue={settingss.quality}>
            <option value="1080p">1080p</option>
            <option value="720p">720p</option>
            <option value="480p">480p</option>
          </select>
        </div>
        <div className="section">
          <div className="title2">{json.watch.txt2}</div>
          <select defaultValue={settingss.langue} id="lang">
            <option value="ar">العربية</option>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="hi">हिन्दी</option>
            <option value="it">Italiano</option>
            <option value="jp">日本語</option>
            <option value="ko">한국어</option>
            <option value="nl">Nederlands</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
            <option value="tr">Türkçe</option>
            <option value="zh">中文</option>
          </select>
        </div>
        <div className="section">
          <div className="title2">{json.watch.txt3}</div>
          <select defaultValue={settingss.cc} id="langCC">
            <option value="null">{json.settings.txt4}</option>
            <option value="ar">العربية</option>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="hi">हिन्दी</option>
            <option value="it">Italiano</option>
            <option value="jp">日本語</option>
            <option value="ko">한국어</option>
            <option value="nl">Nederlands</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
            <option value="tr">Türkçe</option>
            <option value="zh">中文</option>
          </select>
        </div>
        <div className="section" style={{ display: "none" }}>
          <div className="title2">{json.settings.txt2}</div>
          <select name="skipintro" id="skipintro" defaultValue={settingss.skip.intro}>
            <option value="true">{json.yes}</option>
            <option value="false">{json.no}</option>
          </select>
        </div>
        <div className="section" style={{ display: "none" }}>
          <div className="title2">{json.settings.txt3}</div>
          <select name="skipoutro" id="skipoutro" defaultValue={settingss.skip.outro}>
            <option value="true">{json.yes}</option>
            <option value="false">{json.no}</option>
          </select>
        </div>
      </div>
      <button onClick={() => { saveSettings(idSession) }}>{json.account.txt6}</button>
    </div>
  );
};