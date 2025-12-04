import React from 'react';
import '../../styles/account.scss'
import '../../styles/all.scss';
import { deleteSession, login, deleteAccount, createAccount, saveKeys } from '../../functions';
import { Loading, Error500} from '../layout';
import { Props } from '@types';
import { useAccount } from "../../hooks/useAccount";

export const Account: React.FC<Props> = ({ json, lang }) => {
  const { error, idsession, itemsData, listWishList, listwatchList, loading, premiumStatut, sessionsHtml, storageId, location } = useAccount(json);

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