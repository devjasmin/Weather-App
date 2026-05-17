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
// import { getFavoriteCities } from "./API.js";
import { saveCityAsFavorite } from "./API.js";
// import { setCurrentCity } from "./state.js";

export async function loadDetailView(cityName) {
  renderLoadingScreen("Die Wetterdaten werden für " + cityName + " geladen...");

  const weatherData = await getForecastWeather(cityName);
  renderDetailView(weatherData); // hier auskommentieren, damit ich nur den Ladespinner sehe
  registerEventListeners(cityName);
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
    getActionsBarHTML() +
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
}

function registerEventListeners(city) {
  const backBtn = document.querySelector(".weather-app__return-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      rootElement.classList.remove("show-background");
      rootElement.style = "";
      loadMenu(city);
      alert(city + "Stadt wurde unten aufgeführt!");
      console.log("Stadt wurde unten aufgeführt! Zurück zu", city);
    });
  }

  const favoriteButton = document.querySelector(".weather-app__favorite-btn");
  if (favoriteButton) {
    favoriteButton.addEventListener("click", () => {
      saveCityAsFavorite(city);
      alert(city + "wurden den Favoriten hinzugfügt!");
      console.log("Zu den Favoriten hinzufügen", city);
    });
  }
}

function getActionsBarHTML(showFavoritesButton = true) {
  const backIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"    stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
        `;

  const favoriteIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
`;

  return `
          <div class="weather-app__header">
          <div class="weather-app__return-btn">${backIcon}</div>
          ${showFavoritesButton ? `<div class="weather-app__favorite-btn">${favoriteIcon}</div>` : ""}
          </div>  
  `;
}

function getHeaderHTML(location, currentTemp, condition, maxTemp, minTemp) {
  return `
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
