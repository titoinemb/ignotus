export const pip = async () => {
  let videoElement = document.getElementById('video-player') as HTMLVideoElement;
  if (videoElement) {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoElement.requestPictureInPicture();
    };
  };
};