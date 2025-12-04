import React from 'react';
import '../../styles/search.scss'
import { Loading, Error500 } from '../layout';
import { Props } from '@types';
import { useSearch } from "../../hooks/useSeach";

export const Search: React.FC<Props> = ({json, lang}) => {
  const { error, listBase, loading } = useSearch();

  if (loading) return <Loading />;
  if (error === true) return <Error500 lang={lang} json={json} />;

  return (
    <div className='search'>
      <div className="top">
        <div className="title">{json.search.title}</div>
        <div className="searching">
          <input type="text" id='searchQuery' placeholder={json.search.input} />
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="gray" height="17px" width="17px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve"><g><g><path id="search" d="M508.255,490.146l-128-128c-0.06-0.06-0.137-0.077-0.196-0.128c34.193-38.434,55.142-88.917,55.142-144.418    c0-120.175-97.425-217.6-217.6-217.6S0.001,97.425,0.001,217.6s97.425,217.6,217.6,217.6c55.501,0,105.975-20.949,144.418-55.151    c0.06,0.06,0.077,0.137,0.128,0.196l128,128c2.5,2.509,5.777,3.755,9.054,3.755s6.554-1.246,9.054-3.746    C513.247,503.253,513.247,495.147,508.255,490.146z M217.601,409.6c-105.865,0-192-86.135-192-192s86.135-192,192-192    s192,86.135,192,192S323.466,409.6,217.601,409.6z"></path></g></g></svg>
        </div>
      </div>
      <div className="mid">
        <ul id="midList">
          <>
            {listBase.map((item) => {
              const t = item.saisons ? "series" : "movies";
              return (
                <li key={item._id.$oid}>
                  <div
                    className="linkId"
                    id={item._id.$oid}
                    onClick={() => {
                      window.location.href = `/item?t=${t}&i=${item._id.$oid}`;
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.location.href = `/item?t=${t}&i=${item._id.$oid}`;
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="image">
                      <div className="image2">
                        <img src={item.minipicture} alt="logo" />
                      </div>
                      <img src={item.picture} alt="cover" />
                    </div>
                  </div>
                </li>
              );
            })}
          </>
        </ul>
      </div>
    </div>
  );
};