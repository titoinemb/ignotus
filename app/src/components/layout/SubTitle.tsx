import React, { useEffect, useState } from 'react';
import { SubTitleProps, Cue } from "@types";
import { parseSrt, sanitizeSubtitleHtml } from "../../functions";
import "../../styles/subTitle.scss";

export const SubTitle: React.FC<SubTitleProps> = ({videoId, srt, srtUrl, offset = 0, className}) => {
  const [cues, setCues]             = useState<Cue[]>([]);
  const [activeText, setActiveText] = useState<string | null>(null);

  const shouldShowOverlay = srt !== null && srtUrl !== null;

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!shouldShowOverlay) {
        setCues([]);
        return;
      }
      if (srt) {
        setCues(parseSrt(srt));
        return;
      }
      if (srtUrl) {
        try {
          const res = await fetch(srtUrl);
          if (!res.ok) { setCues([]); return; }
          const txt = await res.text();
          if (!cancelled) setCues(parseSrt(txt));
        } catch (e) {
          console.error(e);
          if (!cancelled) setCues([]);
        }
      }
    };
    load();
    return () => { cancelled = true; };
  }, [srt, srtUrl, shouldShowOverlay]);

  useEffect(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!video) {
      console.warn('Video element not found:', videoId);
      return;
    }

    if (!shouldShowOverlay || cues.length === 0) {
      setActiveText(null);
      return;
    }

    let raf = 0;
    const tick = () => {
      const t = (video.currentTime || 0) + offset;
      const cue = cues.find(c => t >= c.start && t <= c.end);
      setActiveText(cue ? cue.text : null);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [videoId, cues, offset, shouldShowOverlay]);

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
}