import { setupButtonClickListener } from "..";

export const homeclick = (event: MouseEvent): void => {
  const target = event.target as HTMLElement;

  if (target.id === 'upscrollanimation') {
    setupButtonClickListener("animationlist", 500);
  } else if (target.id === 'unscrollanimation') {
    setupButtonClickListener("animationlist", -500);
  } else if (target.id === 'upscrollaction') {
    setupButtonClickListener("actionlist", 500);
  } else if (target.id === 'unscrollaction') {
    setupButtonClickListener("actionlist", -500);
  } else if (target.id === 'upscrolladventure') {
    setupButtonClickListener("adventurelist", 500);
  } else if (target.id === 'unscrolladventure') {
    setupButtonClickListener("adventurelist", -500);
  } else if (target.id === 'upscrollcomedy') {
    setupButtonClickListener("comedylist", 500);
  } else if (target.id === 'unscrollcomedy') {
    setupButtonClickListener("comedylist", -500);
  };
};