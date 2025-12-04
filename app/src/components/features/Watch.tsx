import React from 'react';
import { Loading, Error500, AntiAdBlock, SubTitle } from '../layout';
import '../../styles/watch.scss';
import "../../scripts/watch";
import { pip, fullscreen, paramWindow, controlsBtn, settingsFunction } from '../../functions';
import { Props } from '@types';
import { Error404 } from "../features";
import { useWatch } from "../../hooks/useWatch";

export const Watch: React.FC<Props> = ({ json, lang }) => {
  const { adblockStatut, currentTime, duration, error, error404, langDispo, loading, mySrt, settings, time, totalTime, videoUrl, handleRangeChange, queryParams } = useWatch(lang);

  if (loading) return <Loading />;
  if (error === true) return <Error500 lang={lang} json={json} />;
  if (error404 === true || !videoUrl) return <Error404 lang={lang} json={json} />;
  if (adblockStatut === true) return <AntiAdBlock lang={lang} json={json} />

  return (
    <div className="video-player">
      <video id="video-player">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <SubTitle videoId="video-player" srtUrl={mySrt} />
      <div className="controls" id="controls">
        <div id="paramBox">
          <div id="boxAll" className="box">
            <ul>
              <li>
                <div id="linkId" onClick={() => { settingsFunction(1) }}>
                  <div className="txt">{json.watch.txt1}</div>
                  <div className="option">
                    <div className="txt">{settings.quality}</div>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="gray" height="17px" width="17px" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752" xmlSpace="preserve">
                        <g>
                          <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div id="linkId" onClick={() => { settingsFunction(3) }}>
                  <div className="txt">{json.watch.txt2}</div>
                  <div className="option">
                    <div className="txt">{settings.langue}</div>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="gray" height="17px" width="17px" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752" xmlSpace="preserve">
                        <g>
                          <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div id="linkId" onClick={() => { settingsFunction(4) }}>
                  <div className="txt">{json.watch.txt3}</div>
                  <div className="option">
                    <div className="txt">{settings.cc === null || settings.cc === "null" ? json.settings.txt4 : settings.cc}</div>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="gray" height="17px" width="17px" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752" xmlSpace="preserve">
                        <g>
                          <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div id="boxQuality" className="box box2" style={{ display: "none" }}>
            <div className="title" id="linkId" onClick={() => { settingsFunction(2) }}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="gray" height="17px" width="17px" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752" xmlSpace="preserve">
                <g>
                  <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z" />
                </g>
              </svg>
              {json.watch.txt1}
            </div>
            <ul>
              <li>
                <div id="linkId">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024"><path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" /></svg>
                  1080p
                </div>
              </li>
              <li>
                <div id="linkId">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024"><path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" /></svg>
                  720p
                </div>
              </li>
              <li>
                <div id="linkId">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024"><path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" /></svg>
                  480p
                </div>
              </li>
            </ul>
          </div>
          <div id="boxlang" className="box box2" style={{ display: "none" }}>
            <div className="title" id="linkId" onClick={() => { settingsFunction(2) }}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="gray" height="17px" width="17px" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752" xmlSpace="preserve">
                <g>
                  <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z" />
                </g>
              </svg>
              {json.watch.txt2}
            </div>
            <ul>
              <li>
                <>
                  {Object.entries(langDispo).map(([lang], idx) => (
                    <div id="linkId" key={lang}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                        <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                      </svg>
                      {lang}
                    </div>
                  ))}
                </>
              </li>
            </ul>
          </div>
          <div id="boxcc" className="box box2" style={{ display: "none" }}>
            <div className="title" id="linkId" onClick={() => { settingsFunction(2) }}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="gray" height="17px" width="17px" version="1.1" id="Capa_1" viewBox="0 0 55.752 55.752" xmlSpace="preserve">
                <g>
                  <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001   c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58   s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912   C44.605,26.413,44.086,24.993,43.006,23.916z" />
                </g>
              </svg>
              {json.watch.txt3}
            </div>
            <ul>
              <li>
                <div id="linkId" data-lang="fr">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">{json.settings.txt4}</span>
                </div>
              </li>
              <li>
                <div id="linkId" data-lang="fr">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Français</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="en">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">English</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="es">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Español</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="jp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">日本語</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="de">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Deutsch</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="it">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Italiano</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="pt">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Português</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="ru">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Русский</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="nl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Nederlands</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="sv">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Svenska</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="tr">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">Türkçe</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="ko">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">한국어</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="zh">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">中文</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="ar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">العربية</span>
                </div>
              </li>

              <li>
                <div id="linkId" data-lang="hi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 1024 1024">
                    <path fill="grey" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z" />
                  </svg>
                  <span className="lang-name">हिन्दी</span>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <div className="bottom">
          <div className="timeinput">
            <input
              type="range"
              id="timeRange"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleRangeChange}
            />
          </div>
          <div className="btnlist">
            <div className="left">
              <button id="linkId" onClick={() => { window.location.href = "/item?t=" + queryParams.t + "&i=" + queryParams.i; }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                  <path d="M4.18753 11.3788C4.03002 11.759 4 11.9533 4 12V20.0018C4 20.5529 4.44652 21 5 21H8V15C8 13.8954 8.89543 13 10 13H14C15.1046 13 16 13.8954 16 15V21H19C19.5535 21 20 20.5529 20 20.0018V12C20 11.9533 19.97 11.759 19.8125 11.3788C19.6662 11.0256 19.4443 10.5926 19.1547 10.1025C18.5764 9.1238 17.765 7.97999 16.8568 6.89018C15.9465 5.79788 14.9639 4.78969 14.0502 4.06454C13.5935 3.70204 13.1736 3.42608 12.8055 3.2444C12.429 3.05862 12.1641 3 12 3C11.8359 3 11.571 3.05862 11.1945 3.2444C10.8264 3.42608 10.4065 3.70204 9.94978 4.06454C9.03609 4.78969 8.05348 5.79788 7.14322 6.89018C6.23505 7.97999 5.42361 9.1238 4.8453 10.1025C4.55568 10.5926 4.33385 11.0256 4.18753 11.3788ZM10.3094 1.45091C10.8353 1.19138 11.4141 1 12 1C12.5859 1 13.1647 1.19138 13.6906 1.45091C14.2248 1.71454 14.7659 2.07921 15.2935 2.49796C16.3486 3.33531 17.4285 4.45212 18.3932 5.60982C19.3601 6.77001 20.2361 8.0012 20.8766 9.08502C21.1963 9.62614 21.4667 10.1462 21.6602 10.6134C21.8425 11.0535 22 11.5467 22 12V20.0018C22 21.6599 20.6557 23 19 23H16C14.8954 23 14 22.1046 14 21V15H10V21C10 22.1046 9.10457 23 8 23H5C3.34434 23 2 21.6599 2 20.0018V12C2 11.5467 2.15748 11.0535 2.33982 10.6134C2.53334 10.1462 2.80369 9.62614 3.12345 9.08502C3.76389 8.0012 4.63995 6.77001 5.60678 5.60982C6.57152 4.45212 7.65141 3.33531 8.70647 2.49796C9.2341 2.07921 9.77521 1.71454 10.3094 1.45091Z" fill="#fff" />
                </svg>
              </button>
              <button id="linkId" className='playBtn secbtn' onClick={() => { controlsBtn(1); }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
                  <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z" />
                </svg>
              </button>
              <button id="linkId" className='pauseBtn secbtn' onClick={() => { controlsBtn(0); }} style={{ display: "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z" fill="#fff" /></svg>
              </button>
              <button className="time secbtn nohover">
                {time} / {totalTime}
              </button>
            </div>
            <div className="right">
              <button id="linkId" onClick={paramWindow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-5 h-5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
              <button id="linkId" className='secbtn' onClick={pip}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-picture-in-picture2 w-6 h-6"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"></path><rect width="10" height="7" x="12" y="13" rx="2"></rect></svg>
              </button>
              <button id="linkId" className='secbtn' onClick={fullscreen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize w-6 h-6"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};