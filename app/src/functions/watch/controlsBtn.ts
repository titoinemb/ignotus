export const controlsBtn = async (input: number) => {
  let video = document.getElementById("video-player") as HTMLVideoElement;
  if (!video) return;

  let pauseButton = document.querySelector<HTMLElement>(".pauseBtn");
  let playButton = document.querySelector<HTMLElement>(".playBtn");

  if (!pauseButton || !playButton) return;

  if (input === 1) {
    pauseButton.style.display = "block";
    playButton.style.display = "none";
    video.play();
  } else if (input === 0) {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    video.pause();
  } else if (input === 2) {
    video.currentTime += 10;
  } else if (input === 3) {
    video.currentTime -= 10;
  };
};
