export const toggleScrollButtons = (list: HTMLElement): void => {
  const upButton = document.getElementById('upscrollanimation');
  const downButton = document.getElementById('unscrollanimation');
  const actionUpButton = document.getElementById('upscrollaction');
  const actionDownButton = document.getElementById('unscrollaction');
  const adventureUpButton = document.getElementById('upscrolladventure');
  const adventureDownButton = document.getElementById('unscrolladventure');
  const comedyUpButton = document.getElementById('upscrollcomedy');
  const comedyDownButton = document.getElementById('unscrollcomedy');

  if (list) {
    if (list.id === 'animationlist') {
      if (list.scrollLeft === 0) {
        if (downButton) downButton.style.display = 'none';
      } else {
        if (downButton) downButton.style.display = 'block';
      };

      const maxScroll = list.scrollWidth - list.clientWidth;
      if (list.scrollLeft >= maxScroll) {
        if (upButton) upButton.style.display = 'none';
      } else {
        if (upButton) upButton.style.display = 'block';
      };
    };

    if (list.id === 'actionlist') {
      if (list.scrollLeft === 0) {
        if (actionDownButton) actionDownButton.style.display = 'none';
      } else {
        if (actionDownButton) actionDownButton.style.display = 'block';
      };

      const maxScroll = list.scrollWidth - list.clientWidth;
      if (list.scrollLeft >= maxScroll) {
        if (actionUpButton) actionUpButton.style.display = 'none';
      } else {
        if (actionUpButton) actionUpButton.style.display = 'block';
      };
    };

    if (list.id === 'adventurelist') {
      if (list.scrollLeft === 0) {
        if (adventureDownButton) adventureDownButton.style.display = 'none';
      } else {
        if (adventureDownButton) adventureDownButton.style.display = 'block';
      }

      const maxScroll = list.scrollWidth - list.clientWidth;
      if (list.scrollLeft >= maxScroll) {
        if (adventureUpButton) adventureUpButton.style.display = 'none';
      } else {
        if (adventureUpButton) adventureUpButton.style.display = 'block';
      };
    };

    if (list.id === 'comedylist') {
      if (list.scrollLeft === 0) {
        if (comedyDownButton) comedyDownButton.style.display = 'none';
      } else {
        if (comedyDownButton) comedyDownButton.style.display = 'block';
      };

      const maxScroll = list.scrollWidth - list.clientWidth;
      if (list.scrollLeft >= maxScroll) {
        if (comedyUpButton) comedyUpButton.style.display = 'none';
      } else {
        if (comedyUpButton) comedyUpButton.style.display = 'block';
      };
    };
  };
};