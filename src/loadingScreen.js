import { rootElement } from "./main.js";

export function renderLoadingScreen(message = "Lade...") {
  rootElement.innerHTML = getLoadingHTML(message);
}

function getLoadingHTML(message) {
  return `
    <div class="loadingScreen">
      <div class="loadingScreen__message">${message}</div>
      <div class="loadingScreen__spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
}
