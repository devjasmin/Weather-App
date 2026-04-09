import "./styles/style.scss";

import { getCurrentWeather } from "./API.js";

// getCurrentWeather("New York"); // nur wenn ich diesen Ort angezeigt haben will.

async function init(location) {
  const data = await getCurrentWeather((location = "Bern"));

  const placeNameElement = document.querySelector("#place-name");
  placeNameElement.textContent = await data.location.name;

  const placeTemperatureElement = document.querySelector("#place-temperature");
  placeTemperatureElement.textContent = (await data.current.temp_c) + "°";

  const placeConditionElement = document.querySelector("#place-condition");
  placeConditionElement.textContent = await data.current.condition.text;
  const maxMinTemperatureElement = document.querySelector(
    "#max-min-temperature",
  );
  maxMinTemperatureElement.textContent = `H: ${await data.forecast.forecastday[0].day.maxtemp_c}° / T: ${await data.forecast.forecastday[0].day.mintemp_c}°`;
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
