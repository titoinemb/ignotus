import { toggleScrollButtons, setupButtonClickListener } from "..";

export const initScrollButtons = (): void => {
  const upButton = document.getElementById('upscrollanimation');
  const downButton = document.getElementById('unscrollanimation');
  const actionUpButton = document.getElementById('upscrollaction');
  const actionDownButton = document.getElementById('unscrollaction');
  const adventureUpButton = document.getElementById('upscrolladventure');
  const adventureDownButton = document.getElementById('unscrolladventure');
  const comedyUpButton = document.getElementById('upscrollcomedy');
  const comedyDownButton = document.getElementById('unscrollcomedy');
  
  const list = document.getElementById('animationlist');
  const actionList = document.getElementById('actionlist');
  const adventureList = document.getElementById('adventurelist');
  const comedyList = document.getElementById('comedylist');

  if (list) {
    toggleScrollButtons(list);
  };

  if (actionList) {
    toggleScrollButtons(actionList);
  };

  if (adventureList) {
    toggleScrollButtons(adventureList);
  };

  if (comedyList) {
    toggleScrollButtons(comedyList);
  };

  if (upButton && downButton) {
    upButton.addEventListener('click', () => {
      setupButtonClickListener("animationlist", 500);
    });

    downButton.addEventListener('click', () => {
      setupButtonClickListener("animationlist", -500);
    });
  };

  if (actionUpButton && actionDownButton) {
    actionUpButton.addEventListener('click', () => {
      setupButtonClickListener("actionlist", 500);
    });

    actionDownButton.addEventListener('click', () => {
      setupButtonClickListener("actionlist", -500);
    });
  };

  if (adventureUpButton && adventureDownButton) {
    adventureUpButton.addEventListener('click', () => {
      setupButtonClickListener("adventurelist", 500);
    });

    adventureDownButton.addEventListener('click', () => {
      setupButtonClickListener("adventurelist", -500);
    });
  };

  if (comedyUpButton && comedyDownButton) {
    comedyUpButton.addEventListener('click', () => {
      setupButtonClickListener("comedylist", 500);
    });

    comedyDownButton.addEventListener('click', () => {
      setupButtonClickListener("comedylist", -500);
    });
  };
};