import { smoothScroll } from "..";

export const setupButtonClickListener = (id: string, scrollAmount: number): void => {
  const list = document.getElementById(id);
  
  if (list) {
    const currentScrollPosition = list.scrollLeft;
    const targetPosition = currentScrollPosition + scrollAmount;

    smoothScroll(list, targetPosition, 300);
  };
};