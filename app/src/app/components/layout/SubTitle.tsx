import React from 'react';
import { SubTitleProps } from "@types";
import { sanitizeSubtitleHtml } from "../../../functions";
import { useSubtitles } from "../../../hooks/useSubTitle";
import "../../styles/subTitle.scss";

export const SubTitle: React.FC<SubTitleProps> = ({videoId, srt, srtUrl, offset = 0, className}) => {
  const { activeText } = useSubtitles(srt, srtUrl, videoId, offset);

  return (
    <div
      aria-live="polite"
      className={className}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '6%',
        pointerEvents: 'none',
        textAlign: 'center',
        padding: '0 1rem',
      }}
    >
      {activeText && (
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: 6,
            whiteSpace: 'pre-wrap',
            lineHeight: 1.2,
            fontSize: 16,
          }}
          dangerouslySetInnerHTML={{ __html: sanitizeSubtitleHtml(activeText) }}
        />
      )}
    </div>
  );
};