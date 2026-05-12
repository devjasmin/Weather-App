import { rootElement } from "./main.js";
import { getForecastWeather } from "./API.js";
import { formatTemperature } from "./utils.js";
import { renderLoadingScreen } from "./loadingScreen.js";
import { getDayConditions, getHourHTML } from "./24h.js";
import { getDays } from "./3days.js";
import { getMiniStats } from "./mini-stats.js";
import { formatClock } from "./utils.js";
import { getConditionImagePath } from "./conditions.js";
import { loadMenu } from "./menu.js";

export async function loadDetailView(cityName) {
  renderLoadingScreen("Die Wetterdaten werden für " + cityName + " geladen...");

  const weatherData = await getForecastWeather(cityName);
  renderDetailView(weatherData); // hier auskommentieren, damit ich nur den Ladespinner sehe
}

function renderDetailView(weatherData) {
  const { location, current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];

  const conditionImage = getConditionImagePath(
    current.condition.code,
    current.is_day !== 1,
  );

  if (conditionImage) {
    rootElement.style = `--detail-condition-image: url(${conditionImage})`;
    rootElement.classList.add("show-background");
  }

  rootElement.innerHTML =
    getHeaderHTML(
      location.name,
      formatTemperature(current.temp_c) + "°",
      current.condition.text,
      "H: " + formatTemperature(currentDay.day.maxtemp_c) + "°",
      "T: " + formatTemperature(currentDay.day.mintemp_c) + "°",
    ) +
    `<div class = "today-forecast" glass-background">
    ${getDayConditions(forecast.forecastday)}
    ${getHourHTML(forecast.forecastday)}
    </div>` +
    `<div class = "forecast-days" glass-background>
    ${getDays(forecast.forecastday)}
    </div>` +
    `<div class ="mini-stats" glass-background>
    ${getMiniStats(forecast.forecastday, current)}`;

  const Btnback = document.querySelector(".weather-app__return-btn");
  if (Btnback) {
    Btnback.addEventListener("click", () => {
      rootElement.classList.remove("show-background");
      rootElement.style = "";
      loadMenu("Oslo");
    });
  }
}

function getHeaderHTML(location, currentTemp, condition, maxTemp, minTemp) {
  return `
      <div class="weather-app__header">
      <button class="weather-app__return-btn"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button></div>
        <div class="weather-app__main">
          <div class="weather-app__place-name" >${location}</div>
          <div class="weather-app__place-temperature" >${currentTemp}</div>
          <div class="weather-app__place-condition">${condition}</div>
          <div class="weather-app__temperature-container">
          <div class="weather-app__place-max-temperature">${maxTemp}</div>
          <div class="weather-app__place-min-temperature">${minTemp}</div>
        </div>
        </div>      
    `;
}
