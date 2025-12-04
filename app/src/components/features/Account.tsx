import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/account.scss'
import '../../styles/all.scss';
import { deleteSession, login, session, deleteAccount, createAccount, saveKeys } from '../../functions';
import { Loading, Error500} from '../layout';
import { ItemResponse, Props } from '@types';

export const Account: React.FC<Props> = ({ json, lang }) => {
  const [idsession, setIdsession]         = useState<string | null>(null)
  const [loading, setLoading]             = useState<boolean>(true);
  const [error, setError]                 = useState<0 | null>(null);
  const [sessionsHtml, setSessions]       = useState<any[]>([]);
  const [storageId, setSessionsId]        = useState<string>('');
  const [premiumStatut, setPremiumStatut] = useState<string>('');
  const [listWishList, setListWishList]   = useState<any[]>([]);
  const [listwatchList, setlistwatchList] = useState<any[]>([]);
  const [itemsData, setItemsData]         = useState<ItemResponse[] | []>([]);

  let location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;

    const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));
    const maxAttempts = 3;

    const run = async () => {
      const rawSession = localStorage.getItem("session");
      const rawId = localStorage.getItem("username");
      if (!rawSession || !rawId) return;

      for (let attempt = 1; attempt <= maxAttempts && !cancelled; attempt++) {
        try {
          const timeoutMs = 3000;
          const sessionPromise = session(rawSession, rawId);
          const sessionData = await Promise.race([
            sessionPromise,
            new Promise<number>((_, rej) => setTimeout(() => rej(new Error("timeout")), timeoutMs))
          ]) as number;

          if (sessionData === 1) {
            if (!cancelled) setIdsession(rawSession);
            return;
          };

          if (attempt < maxAttempts) {
            await sleep(500 * 2 ** (attempt - 1));
            continue;
          };

          if (!cancelled) {
            localStorage.removeItem("session");
            localStorage.removeItem("username");
            window.location.href = "";
          };
          return;
        } catch (err) {
          if (attempt === maxAttempts) {
            if (!cancelled) {
              localStorage.removeItem("session");
              localStorage.removeItem("username");
              window.location.href = "";
            };
            return;
          };
          await sleep(500 * 2 ** (attempt - 1));
        };
      };
    };

    run();

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/ping', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          return setError(0);
        };

        if (localStorage.getItem('session')) {
          const response2 = await fetch('http://localhost:8080/account/datas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ username: localStorage.getItem('username') as string, session: localStorage.getItem('session') as string }),
          });

          if (!response2.ok) {
            return setError(0);
          };

          const datarep2 = await response2.json();
          if (!datarep2) {
            return setError(0);
          };

          if (datarep2.message !== "1") return setError(0);

          await setSessions(datarep2.datas.session);
          await setSessionsId(localStorage.getItem('username') as string);
          await setListWishList(datarep2.datas.wishlist);
          await setlistwatchList(datarep2.datas.watchList);

          const raw = datarep2.datas.premium;
          const p = typeof raw === 'string' ? new Date(raw) : raw;
          const days = Math.ceil((+p - Date.now()) / 86400000);

          if (days < 0) {
            setPremiumStatut(json.account.txt16);
          } else {
            setPremiumStatut(json.account.txt17 + " " + days);
          };
        };
      } catch (error) {
        console.log("OK")
        setError(0);
      } finally {
        setLoading(false);
      };
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [json.account]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!listWishList || listWishList.length === 0) {
        setItemsData([]);
        return;
      }

      try {
        const results = [];

        for (const item of listWishList) {
          const res = await fetch('http://localhost:8080/item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ table: item.table, id: item.id }),
          });

          if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
          const json = await res.json();
          if (!json) throw new Error("empty-response");

          results.push({ id: item.id, data: json });
        }

        if (mounted) {
          setItemsData(results);
        }
      } catch (err) {
        if (mounted) {
          setError(0);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [listWishList]);


  if (loading) return <Loading />;
  if (error === 0) return <Error500 lang={lang} json={json} />;

  let params = new URLSearchParams(location.search);
  let queryParams: { [key: string]: string } = {};

  params.forEach((value, key) => {
    queryParams[key] = value;
  });

  if (!idsession) {
    if (!queryParams.i) {
      return (
        <div className='app'>
          <div className="title">{json.account.txt1}</div>
          <div className="desc">Username</div>
          <div className="words">
            <input type="text" id="word2" />
          </div>
          <div className="desc">{json.account.txt2}</div>
          <div className='words'>
            <input type="text" id="word1" />
          </div>
          <div className="error" id='error1'>{json.account.txt8}</div>
          <div className="error" id='error2'>{json.account.txt9}</div>
          <button onClick={login}>{json.account.txt1}</button>
          <div className="create" onClick={() => { window.location.href = "/account?i=1" }}>
            {json.account.txt3}
          </div>
        </div>
      );
    } else {
      return (
        <div className='app'>
          <div className="title">{json.account.txt3}</div>
          <div className="desc" id='desc' style={{ display: "none" }}>Username</div>
          <div className="words words2" id='words3' style={{ display: "none" }}>
            <input type="text" id="word2Reg" />
          </div>
          <div className="desc2" id='desc' style={{ display: "none" }}>password</div>
          <div className="words words2" id='words2' style={{ display: "none" }}>
            <input type="text" id="word0Reg" readOnly />
          </div>
          <button id="savebtn" onClick={saveKeys} style={{ display: "none" }}>{json.account.txt6}</button>
          <div className="saveok" id='saveok'>{json.account.txt7}</div>
          <div className="save" id='save'>{json.account.txt5}</div>
          <div id="security" className="security">{json.account.txt4}</div>
          <button id="createReg" onClick={createAccount}>{json.account.txt3}</button>
          <div className="create" onClick={() => { window.location.href = "/account" }}>
            {json.account.txt1}
          </div>
        </div>
      );
    };
  } else {
    return (
      <div className='app2'>
        <div className="title">{json.account.txt10}</div>
        <div className="session">
          <div className="statut">{json.account.txt14}</div>
        </div>
        <div className="premium">
          <div className="statut">{json.account.txt18}</div>
          {premiumStatut}
        </div>
        {listwatchList && listwatchList.length > 0 && (
          <div className="sec">
            <div className="title">{json.account.txt12}</div>
            <div className="items">
              <ul>

              </ul>
            </div>
          </div>
        )}
        {listWishList && listWishList.length > 0 && (
          <div className="sec">
            <div className="title">{json.account.txt11}</div>
            <div className="wishlist">
              <ul>
                <>
                  {itemsData.map((it) => {
                    const item = it.data.data[0];
                    const t = item.saisons ? 0 : 1;
                    return (
                      <li key={item._id}>
                        <div
                          className="linkId"
                          onClick={() => {
                            window.location.href = `/item/?t=${t}&i=${item._id}`;
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              window.location.href = `/item/?t=${t}&i=${item._id}`;
                            };
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="image">
                            <div className="image2"><img src={item.minipicture} alt="logo" /></div>
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
        )}
        <div className="sec">
          <div className="title">{json.account.txt13}</div>
          <div className="items">
            <>
              {sessionsHtml.map((item, index) => (
                <div
                  key={item.token}
                  className="linkId"
                  id={item.token}
                  onClick={() => {
                    deleteSession(item.token, storageId, index.toString());
                  }}
                >
                  <div className="title">{json.account.txt14} {item.name}</div>
                  <div className="desc">{json.account.txt15}</div>
                </div>
              ))}
            </>
          </div>
        </div>
        <button id="linkId" onClick={deleteAccount}>{json.account.txt19}</button>
      </div>
    );
  }
};