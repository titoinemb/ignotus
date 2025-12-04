import React from "react";
import '../../styles/error.scss';
import { Props } from "@types";

export const Error500: React.FC<Props> = ({json, lang}) => {
  return (
    <div className='app'>
      <div className="image">
        <img src="/imgs/error500.webp" alt="background" />
      </div>
      <div className="info">
        <div className="title">{json.error500.title}</div>
        <div className="description">{json.error500.description}</div>
      </div>
    </div>
  );
};