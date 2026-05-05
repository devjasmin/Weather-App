import { rootElement } from "./main.js";

export function renderSecondLoadingScreen(message = "Ist am Laden...") {
  rootElement.innerHTML = getLoadingHTML(message);
}

function getLoadingHTML(message) {
  return `
    <div class="second-loadingScreen">
      <div class="second-loadingScreen__message">${message}</div>
      <div class="second-loadingScreen__spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
}
