import { useEffect, useState } from 'react';
import { WatchState } from "@types";
import { useLocation } from 'react-router-dom';
import { AdBlockDetector, formatTime } from '../functions';

export const useWatch = (lang: string) => {
  let config = JSON.parse(localStorage.getItem("setting") || "[]");
  let location = useLocation();
  let params = new URLSearchParams(location.search);

  const [state, setState] = useState<WatchState>({
    loading: true,
    error: false,
    error404: false,
    videoUrl: null,
    adblockStatut: false,
    langDispo: [],
    settings: '',
    duration: 0,
    currentTime: 0,
    time: '00:00:00',
    mySrt: null,
    totalTime: '00:00:00',
    quality: config.quality,
  });

  const queryParams: { [key: string]: string } = {};

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newTime = Number(event.target.value);

    setState(prevState => ({ ...prevState, currentTime: newTime }));

    let video = document.getElementById("video-player") as HTMLVideoElement;

    if (video) {
      video.currentTime = newTime;

      let rangeInput = event.target as HTMLInputElement;
      let percentage = (newTime / video.duration) * 100;
      
      rangeInput.style.setProperty('--current-time', `${percentage}%`);

      let remainingTime = video.duration - newTime;
      let hours = Math.floor(remainingTime / 3600);
      let minutes = Math.floor((remainingTime % 3600) / 60);
      let seconds = Math.floor(remainingTime % 60);
      let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      setState(prevState => ({ ...prevState, time: formattedTime }));
    };
  };

  params.forEach((value, key) => {
    queryParams[key] = value;
  });

  (async () => {
    let adblock = await AdBlockDetector();

    return await setState(prevState => ({ ...prevState, adblockStatut: adblock }));
  })();

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch('http://localhost:8080/item', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ table: queryParams.t, id: queryParams.i }),
        });

        let datarep = await response.json();

        if (datarep.message !== "1") return setState(prevState => ({ ...prevState, error404: true }));
        if (!response.ok || !datarep) return setState(prevState => ({ ...prevState, error: true }));

        let sessionStorage = localStorage.getItem('session');

        if (sessionStorage) {
          let response3 = await fetch('http://localhost:8080/account/datas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ username: localStorage.getItem('username') as string, session: localStorage.getItem('session') as string }),
          });

          const datarep3 = await response3.json();

          if (!response3.ok || !datarep3 || (datarep3.message !== "1")) return setState(prevState => ({ ...prevState, error: true }));

          await setState(prevState => ({ ...prevState, quality: datarep3.datas.settings.quality }));
          await setState(prevState => ({ ...prevState, settings: datarep3.datas.settings }));
        } else {
          setState(prevState => ({ ...prevState, settings: JSON.parse(localStorage.getItem('setting') as string )}));
        };

        let CCStorage = JSON.parse(localStorage.getItem('setting') as string).cc;

        //if (CCStorage !== "null") await setState(prevState => ({ ...prevState, mySrt: `http://localhost/files/${datarep.data.data?.[lang].cc}` }));

        if (queryParams.e) {
          await setState(prevState => ({ ...prevState, langDispo: datarep.data.saisons[queryParams.e].episode[queryParams.e].data }));
        } else {
          await setState(prevState => ({ ...prevState, langDispo: datarep.data.data }));
        };

        await setState(prevState => ({ ...prevState, videoUrl: `http://localhost/files/${datarep.data.data?.[lang]?.quality?.["p" + (state.quality).replace(/p$/, '')]}` }));
      } catch (err) {
        setState(prevState => ({ ...prevState, error: true }));
      } finally {
        setState(prevState => ({ ...prevState, loading: false }));
      };
    })();
  }, [queryParams.i, queryParams.t, queryParams.e, queryParams.s, lang]);

  useEffect(() => {
    let video = document.getElementById("video-player") as HTMLVideoElement;

    if (video) {
      video.onloadedmetadata = () => {
        setState(prevState => ({ ...prevState, duration: video.duration }))
        setState(prevState => ({ ...prevState, totalTime: formatTime(video.duration) }))
      };

      let updateCurrentTime = () => {
        setState(prevState => ({ ...prevState, currentTime: video.currentTime }))

        let rangeInput = document.querySelector('input[type="range"]') as HTMLInputElement;
        let percentage = (video.currentTime / video.duration) * 100;
        if (rangeInput) {
          rangeInput.style.setProperty('--current-time', `${percentage}%`);
        };

        let remainingTime = video.currentTime;
        let hours         = Math.floor(remainingTime / 3600);
        let minutes       = Math.floor((remainingTime % 3600) / 60);
        let seconds       = Math.floor(remainingTime % 60);

        setState(prevState => ({ ...prevState, time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}` }))
      };

      video.addEventListener('timeupdate', updateCurrentTime);

      return () => {
        video.removeEventListener('timeupdate', updateCurrentTime);
      };
    };
    return;
  }, [state.videoUrl]);


  return {
    ...state,
    handleRangeChange,
    queryParams
  };
};