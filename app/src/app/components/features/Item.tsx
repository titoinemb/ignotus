import '../../styles/item.scss';
import { Loading } from '../layout';
import { formatDate, wishlist } from "../../functions";
import { Props } from '@types';
import { Error404 } from "."
import { useItem } from "../../hooks/useItem";

export const Item: React.FC<Props> = ({ json, lang }) => {
  const { activeContent, castingsSelect, contentBtn, data, error, handleChange, loading, saisons, queryParams, saisonsSelect, wishlistOption } = useItem();

  if (loading) return <Loading />;
  if (error === true || data === null) return <Error404 lang={lang} json={json} />;

  return (
    <div className='item'>
      <div className="top">
        <div className="background">
          <div className="image">
            <img src={data.data.picture} alt="background" />
          </div>
        </div>
        <div className="info">
          <div className="image">
            <img src={data.data.picture} alt="pic" />
          </div>
          <div className="txt">
            <div className="title">{data.data.data[lang].title}</div>
            <div className="plus">
              <ul>
                <li>
                  <div className='note'>{data.data.note}/10</div>
                </li>
                <li>
                  <div id='linkId' className="genre">{json.genres[data.data.genres[0]]}</div>
                </li>
                <li>
                  <div id='linkId'className="genre">{json.genres[data.data.genres[1]]}</div>
                </li>
                <li>
                  <div id='linkId' className="genre">{json.genres[data.data.genres[2]]}</div>
                </li>
                <li>
                  <div className="time">{(data.data.saisons && Array.isArray(data.data.saisons) ? (`${data.data.saisons.length} saisons`) : (data.data.time))}</div>
                </li>
              </ul>
            </div>
            <div className="description">{data.data.data[lang].description}</div>
            <div className="btn">
              <button
                id="linkId"
                onClick={() => {
                  const t = encodeURIComponent(queryParams?.t ?? "");
                  const id = encodeURIComponent(data?.data?._id.$oid ?? "");
                  const suffix = data?.data?.[0]?.saisons ? "&e=0" : "";
                  const suffix2 = data?.data?.[0]?.saisons ? "&s=0" : "";
                  window.location.href = `/watch?t=${t}&i=${id}${suffix + suffix2}`;
                }}
              >
                {json.item.play}
              </button>
              {localStorage.getItem('session') && (
              <button id="linkId" className='wish' onClick={() => { wishlist(queryParams.t, queryParams.i); }}>
                <svg id='check' style={{ display: wishlistOption === 2 ? "flex" : "none" }} xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none">
                  <g>
                    <path id="Vector" d="M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969" stroke="#fff" />
                  </g>
                </svg>
                {json.item.btn3}</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="btns">
          <ul>
            <li id='saisons' style={{ display: data.data?.saisons ? "flex" : "none" }}>
              <button onClick={() => { contentBtn("saisons") }}>{json.item.btn1}</button>
            </li>
            <li className='li'>
              <button onClick={() => { contentBtn("castings") }}>{json.item.btn4}</button>
            </li>
          </ul>
        </div>
        <div className="content">
          <div id="episodesContent" style={{ display: data.data?.saisons ? activeContent === "saisons" ? "block" : "none" : "none" }}>
            <select name="saisons" id="saisonsSelect" onChange={handleChange}>
              <>
                {saisonsSelect?.map((item, idx) => {
                  return (
                    <option key={idx} value={idx}>{item.name}</option>
                  );
                })}
              </>
            </select>
            <div className="episodes">
              <>
                {saisonsSelect?.[saisons]?.episode?.map((episode: any, i: number) => {
                  if (!episode) return null;
                  const targetI = data?.data?._id.$oid;
                  if (!targetI) return null;

                  return (
                    <div
                      className="episode"
                      key={i}
                      onClick={() => {
                        window.location.href = `/watch/?t=0&i=${targetI}&s=0&e=${i}&s=${saisons}`;
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="image">
                        {episode.picture && <img src={episode.picture} alt="" />}
                      </div>
                      <div className="info">
                        <div className="list">
                          {episode.time} - {formatDate(episode.date)}
                        </div>
                        <div className="title">{episode.data?.[lang]?.title}</div>
                        <p className="description">{episode.data?.[lang]?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
          <div id="castingsContent" className="castingscontent" style={{ display: activeContent === "castings" ? "flex" : "none" }}>
            <ul>
              <>
                {castingsSelect.map((item, idx) => (
                  <li key={idx}>
                    <div
                      id="linkId"
                      className="similar"
                      onClick={() => (window.location.href = item.link)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="image">
                        <img className="cast" src={item.picture} alt="cover" />
                      </div>
                    </div>
                  </li>
                ))}
              </>
            </ul>
          </div>
        </div>
      </div >
    </div >
  );
};