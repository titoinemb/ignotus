import React from "react";
import '../../styles/error.scss';
import { Props } from "@types";

export const Error404: React.FC<Props> = ({json, lang}) => {
  return (
    <div className='app'>
      <div className="image">
        <img src="/imgs/error404.webp" alt="background" />
      </div>
      <div className="info">
        <div className="title">{json.error404.title}</div>
        <div className="description">{json.error404.description}</div>
        <div className="btn">
          <button id='linkId' onClick={() => { window.location.href = "/" }}>{json.error404.btn}</button>
        </div>
      </div>
    </div>
  );
};