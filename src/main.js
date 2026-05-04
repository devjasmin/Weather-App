import "./styles/style.scss";
import { loadDetailView } from "./detailView.js";

export const rootElement = document.getElementById("weather-app");

loadDetailView("Mannheim");
