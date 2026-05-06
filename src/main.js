import "./styles/style.scss";
//import { loadDetailView } from "./detailView.js";
import { loadMenu } from "./menu.js";
//import { renderSecondLoadingScreen } from "./second_loadingScreen.js";

export const rootElement = document.getElementById("weather-app");

//loadDetailView("Bern");
loadMenu("Malta");
