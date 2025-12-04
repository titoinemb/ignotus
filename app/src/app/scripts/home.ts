import { homeclick, homeleanupEventListeners, initScrollButtons } from "../functions";

document.addEventListener('click', homeclick);
window.addEventListener('beforeunload', homeleanupEventListeners);
window.addEventListener('load', initScrollButtons);