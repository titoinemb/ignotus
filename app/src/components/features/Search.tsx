import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/search.scss'
import { Loading, Error500 } from '../layout';
import { Props } from '@types';

export const Search: React.FC<Props> = ({json, lang}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<0 | null>(null);
  const [listBase, setlistBase] = useState<any[]>([]);

  let location = useLocation();
  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let queryParams: { [key: string]: string } = {};
    let typingTimer: NodeJS.Timeout;

    params.forEach((value, key) => {
      queryParams[key] = value;
    });

    var query: string;

    if (!queryParams.query) {
      const charCode = Math.floor(Math.random() * 26) + 97;
      query = String.fromCharCode(charCode);
    } else {
      query = queryParams.query;
    };

    const fetchData = async (query1: string) => {
      try {
        const response = await fetch('http://localhost:8080/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ search: query1 }),
        });

        if (!response.ok) {
          return setError(0);
        };

        const datarep = await response.json();

        if (!datarep) {
          return setError(0);
        };

        await setlistBase(datarep.data);
      } catch (error) {
        setError(0);
      } finally {
        setLoading(false);
      };
    };

    fetchData(query);

    function onUserTyping() {
      clearTimeout(typingTimer);

      typingTimer = setTimeout(() => {
        let inputElement = document.getElementById('searchQuery') as HTMLInputElement | null;

        if (inputElement) {
          let query2 = inputElement.value.trim();

          if (query2.length === 0) return;

          return fetchData(query2);
        };
      }, 1000);
    };

    setTimeout(() => {
      let inputElement = document.getElementById('searchQuery') as HTMLInputElement;

      if (inputElement) {
        return inputElement.addEventListener('input', onUserTyping);
      };
    }, 1000);

  }, [location.search]);

  if (loading) return <Loading />;
  if (error === 0) return <Error500 lang={lang} json={json} />;

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