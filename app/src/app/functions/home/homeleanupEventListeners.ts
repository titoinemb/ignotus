import { homeclick } from "..";

export const homeleanupEventListeners = (): void => {
  document.removeEventListener('click', homeclick);
};