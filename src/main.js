import "/styles/style.scss";
import { getCurrentWeather } from "./API.js";
import { formatTemperature } from "./utils.js";
import "../styles/loadingSpinner.scss";
import { showLoadingScreen, hideLoadingScreen } from "./loadingScreen.js";

async function init(location = "Bern") {
  showLoadingScreen(location);

  // Mini-Pause, damit Browser rendern kann
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await getCurrentWeather(location);

  document.getElementById("loading-screen").style.display = "none";
  hideLoadingScreen();

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

init();

const btnback = document.getElementById("weather-app__return-btn");

btnback.addEventListener("click", function () {
  alert("ich gehe zurück!");
});

const btnfavorite = document.getElementById("weather-app__favorite-btn");

btnfavorite.addEventListener("click", function () {
  alert("Favorit hinzugefügt!");
});
