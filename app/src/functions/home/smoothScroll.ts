import { toggleScrollButtons } from "..";

export const smoothScroll = (element: HTMLElement, target: number, duration: number): void => {
  const start = element.scrollLeft;
  const change = target - start;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    element.scrollLeft = start + change * progress;

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      toggleScrollButtons(element);
    };
  };

  requestAnimationFrame(animateScroll);
};