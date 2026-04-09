import "./styles/style.scss";

import { getCurrentWeather } from "./API.js";
// getCurrentWeather("New York"); // nur wenn ich diesen Ort angezeigt haben will.

async function init() {
  const data = await getCurrentWeather("Neuenhof, Switzerland");

  const placeNameElement = document.querySelector("#place-name");
  placeNameElement.textContent = data.location.name;

  const placeTemperatureElement = document.querySelector("#place-temperature");
  placeTemperatureElement.textContent = data.current.temp_c + "°";

  const placeConditionElement = document.querySelector("#place-condition");
  placeConditionElement.textContent = data.current.condition.text;
  const maxMinTemperatureElement = document.querySelector(
    "#max-min-temperature",
  );
  maxMinTemperatureElement.textContent = `H: ${data.forecast.forecastday[0].day.maxtemp_c}° / T: ${data.forecast.forecastday[0].day.mintemp_c}°`;
}

init();

const Btnback = document.getElementById("weather-app__return-btn");
Btnback.addEventListener("click", () => {
  alert("Zurück zum Hauptmenü");
});

const FavoriteBtn = document.getElementById("weather-app__favorite-btn");
FavoriteBtn.addEventListener("click", () => {
  alert("Ort zu Favoriten hinzugefügt");
});
