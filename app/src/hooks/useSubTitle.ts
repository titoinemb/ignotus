import { useEffect, useState } from 'react';
import { parseSrt } from "../functions";
import { Cue, SubtitlesState } from "@types";

export const useSubtitles = (srt: string | null | undefined, srtUrl: string | null | undefined, videoId: string, offset: number) => {
  const [state, setState] = useState<SubtitlesState>({
    cues: [],
    activeText: null,
    loading: true,
    error: null,
  });

  const shouldShowOverlay = srt !== null && srtUrl !== null;

  useEffect(() => {
    let cancelled = false;

    const loadCues = async () => {
      if (!shouldShowOverlay) {
        setState({ cues: [], activeText: null, loading: false, error: null });
        return;
      }

      if (srt) {
        setState({ ...state, cues: parseSrt(srt), loading: false });
        return;
      }

      if (srtUrl) {
        try {
          const res = await fetch(srtUrl);
          if (!res.ok) {
            console.error('Failed to fetch subtitles:', res.statusText);
            setState({ ...state, cues: [], loading: false, error: 'Error fetching subtitles' });
            return;
          }
          const txt = await res.text();
          if (!cancelled) setState({ ...state, cues: parseSrt(txt), loading: false });
        } catch (error) {
          console.error('Error fetching subtitles:', error);
          if (!cancelled) setState({ ...state, cues: [], loading: false, error: 'Error during fetch' });
        }
      }
    };

    loadCues();
    return () => { cancelled = true; };
  }, [srt, srtUrl, shouldShowOverlay, state]);

  useEffect(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!video) {
      console.warn('Video element not found:', videoId);
      return;
    }

    if (!shouldShowOverlay || state.cues.length === 0) {
      setState(prevState => ({ ...prevState, activeText: null }));
      return;
    }

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