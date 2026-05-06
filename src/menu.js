// const Btnback = document.getElementById("weather-app__return-btn");
// Btnback.addEventListener("click", () => {
//   alert("Zurück zum Hauptmenü");
// });

// const FavoriteBtn = document.getElementById("weather-app__favorite-btn");
// FavoriteBtn.addEventListener("click", () => {
//   alert("Ort zu Favoriten hinzugefügt");
// });

// renderSecondLoadingScreen(
//   "Die Wetterdaten werden für " + cityName + " geladen...",
// );

// <button class="weather-app__return-btn">Zurück</button>
// <button class="weather-app__favorite-btn">Favorit</button>

import { getForecastWeather } from "./api.js";
import { formatTemperature } from "./utils.js";
import { rootElement } from "./main.js";
import { getConditionImagePath } from "./conditions.js";
import { loadDetailView } from "./detailView.js";
//import { renderSecondLoadingScreen } from "./second_loadingScreen.js";

export async function loadMenu(cityName) {
  // 1. Daten von der API holen (warten mit await)
  const weatherData = await getForecastWeather(cityName);

  //  2. Die Render-Funktion aufrufen und die Daten übergeben
  renderMenu(weatherData);
}

function renderMenu(weatherData) {
  // 3. Daten entpacken
  const { location, current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];

  // 3.1 Hintergrundbild setzen
  const conditionImage = getConditionImagePath(
    current.condition.code,
    current.is_day !== 1,
  );

  if (conditionImage) {
    rootElement.style = `--detail-condition-image: url(${conditionImage})`;
    rootElement.classList.add("show-background");
  }

  // 4. Das HTML erst HIER generieren, wenn weatherData verfügbar ist!
  rootElement.innerHTML = getMenuHTML(location, current, currentDay);

  // 5. Suche aktivieren
  const searchInput = document.querySelector(".main-menu__search input");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const cityName = searchInput.value;
      loadDetailView(cityName);
    }
  });
}

// 5. Die Funktion braucht die Variablen als "Eingabe" (Argumente)

function getMenuHTML(location, current, currentDay) {
  return `
      <div class="main-menu">
        <div class="main-menu__heading">
          <h1 class="main-menu__title">Wetter</h1>
          <button class="main-menu__btn-edit">Bearbeiten</button>
        </div>
        <div class="main-menu__search" >
          <input type="text" placeholder="Bitte gib einen Ort ein..." />
                </div>
        <div class="main-menu__search-results" >
          <div class="city_column_left">
            <p class="city_name">${location.name}</p>
            <p class="city_country">${location.country}</p>
            <p class="city_condition">${current.condition.text}</p>
          </div>
          <div class="city_column_right">
            <p class="city_temperature">${formatTemperature(current.temp_c)}°</p>
            <p class="city_min_max_temperature">${formatTemperature(currentDay.day.mintemp_c)}° / 
            ${formatTemperature(currentDay.day.maxtemp_c)}°</p>
          </div>
        </div>
      </div>
    `;
}
