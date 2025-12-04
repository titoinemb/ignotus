window.addEventListener('load', async () => {
  let cleanupInit: (() => void) | null = null;
  const waitForElements = () => {
    const myDiv = document.getElementById("controls") as HTMLElement | null;
    const video = document.getElementById("video-player") as HTMLVideoElement | null;
    if (myDiv) {
      init(myDiv, video);
      return true;
    }
    return false;
  };

  const observer = new MutationObserver(() => {
    if (waitForElements()) {
      observer.disconnect();
    };
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });

  waitForElements();

  function init(myDiv: HTMLElement, video: HTMLVideoElement | null) {
    let timeout: number | undefined;

    const hideDiv = () => {
      if (video?.paused) return;
      myDiv.style.visibility = "hidden";
      myDiv.style.pointerEvents = "none";
    };

    const showDiv = () => {
      myDiv.style.visibility = "visible";
      myDiv.style.pointerEvents = "auto";
      myDiv.style.display = "block";
    };

    const resetTimeout = () => {
      if (video?.paused) return;
      if (getComputedStyle(myDiv).visibility === "visible") {
        if (timeout) window.clearTimeout(timeout);
        timeout = window.setTimeout(hideDiv, 1000);
      }
    };

    const onVideoPause = () => {
      if (timeout) window.clearTimeout(timeout);
      showDiv();
    };
    const onVideoPlay = () => {
      resetTimeout();
    };

    document.addEventListener("mousemove", showDiv);
    document.addEventListener("click", showDiv);
    document.addEventListener("mousemove", resetTimeout);
    document.addEventListener("click", resetTimeout);

    video?.addEventListener("pause", onVideoPause);
    video?.addEventListener("play", onVideoPlay);

    if (video?.paused) showDiv();
    else hideDiv();

    cleanupInit = () => {
      document.removeEventListener("mousemove", showDiv);
      document.removeEventListener("click", showDiv);
      document.removeEventListener("mousemove", resetTimeout);
      document.removeEventListener("click", resetTimeout);
      video?.removeEventListener("pause", onVideoPause);
      video?.removeEventListener("play", onVideoPlay);
      if (timeout) window.clearTimeout(timeout);
    };
  };

  return () => {
    observer.disconnect();
    if (cleanupInit) cleanupInit();
  };
});