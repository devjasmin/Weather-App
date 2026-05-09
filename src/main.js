import "./styles/style.scss";
//import { loadDetailView } from "./detailView.js";
import { loadMenu } from "./menu.js";
import { renderLoadingScreen } from "./loadingScreen.js";

export const rootElement = document.getElementById("weather-app");

//loadDetailView("Bern");
loadMenu("Malaga");
renderLoadingScreen("Lade Übersicht...");
