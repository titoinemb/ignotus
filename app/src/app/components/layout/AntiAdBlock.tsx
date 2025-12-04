import React from "react";
import '../../styles/error.scss';
import { Props } from "@types";

export const AntiAdBlock: React.FC<Props> = ({json}) => {
  return (
    <div className='app'>
      <div className="image">
        <img src="/imgs/adblock.webp" alt="background" />
      </div>
      <div className="info">
        <div className="title">{json.adblock.title}</div>
        <div className="description desc">{json.adblock.description}</div>
      </div>
    </div>
  );
};