import "./styles/style.scss";
//import { loadDetailView } from "./detailView.js";
import { loadMenu } from "./menu.js";
import { renderLoadingScreen } from "./loadingScreen.js";
import { currentCity } from "./state.js";

export const rootElement = document.getElementById("weather-app");

//loadDetailView("Bern");
loadMenu(currentCity);
renderLoadingScreen("Lade Übersicht...");
