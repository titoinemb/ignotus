'use client';
import { useEffect, useState } from 'react';
import { parseSrt } from "../functions";
import { SubtitlesState } from "@types";

export const useSubtitles = (srt: string | null | undefined, srtUrl: string | null | undefined, videoId: string, offset: number) => {
  const [state, setState] = useState<SubtitlesState>({
    cues: [],
    activeText: null,
    loading: true,
    error: false,
  });

  const shouldShowOverlay = srt !== null && srtUrl !== null;

  useEffect(() => {
    let cancelled = false;

    const loadCues = async () => {
      if (!shouldShowOverlay) {
        return setState({ cues: [], activeText: null, loading: false, error: false });
      };

      if (srt) {
        return setState({ ...state, cues: parseSrt(srt), loading: false });
      };

      if (srtUrl) {
        try {
          let res = await fetch(srtUrl);

          if (!res.ok) return setState({ ...state, cues: [], loading: false, error: true });
            
          let txt = await res.text();

          if (!cancelled) return setState({ ...state, cues: parseSrt(txt), loading: false });
        } catch (error) {
          if (!cancelled) return setState({ ...state, cues: [], loading: false, error: true });
        };
      };
    };

    loadCues();
    return () => { cancelled = true; };
  }, [srt, srtUrl, shouldShowOverlay, state]);

  useEffect(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!video) {
      console.warn('Video element not found:', videoId);
      return;
    };

    if (!shouldShowOverlay || state.cues.length === 0) return setState(prevState => ({ ...prevState, activeText: null }));

    let raf = 0;
    const updateActiveText = () => {
      const currentTime = (video.currentTime || 0) + offset;
      const cue = state.cues.find(c => currentTime >= c.start && currentTime <= c.end);
      setState(prevState => ({ ...prevState, activeText: cue ? cue.text : null }));
      raf = requestAnimationFrame(updateActiveText);
    };

    raf = requestAnimationFrame(updateActiveText);
    return () => cancelAnimationFrame(raf);
  }, [videoId, state.cues, offset, shouldShowOverlay]);

  return { activeText: state.activeText };
};