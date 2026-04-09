import { showLoadingScreen, hideLoadingScreen } from "./loadingScreen.js";
import "./styles/style.scss";
import { formatTemperature } from "./utils.js";
import { getCurrentWeather } from "./API.js";

// getCurrentWeather("New York"); // nur wenn ich diesen Ort angezeigt haben will.

async function init() {
  const data = await getCurrentWeather("Kloten");

  const placeNameElement = document.querySelector("#place-name");
  placeNameElement.textContent = data.location.name;

  const placeTemperatureElement = document.querySelector("#place-temperature");
  placeTemperatureElement.textContent =
    formatTemperature(data.current.temp_c) + "°";

  const placeConditionElement = document.querySelector("#place-condition");
  placeConditionElement.textContent = data.current.condition.text;
  const maxMinTemperatureElement = document.querySelector(
    "#max-min-temperature",
  );
  maxMinTemperatureElement.textContent = `H: ${formatTemperature(data.forecast.forecastday[0].day.maxtemp_c)}° / T: ${formatTemperature(data.forecast.forecastday[0].day.mintemp_c)}°`;
}

showLoadingScreen();

hideLoadingScreen();
init();

const Btnback = document.getElementById("weather-app__return-btn");
Btnback.addEventListener("click", () => {
  alert("Zurück zum Hauptmenü");
});

const FavoriteBtn = document.getElementById("weather-app__favorite-btn");
FavoriteBtn.addEventListener("click", () => {
  alert("Ort zu Favoriten hinzugefügt");
});
