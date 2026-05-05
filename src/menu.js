// const Btnback = document.getElementById("weather-app__return-btn");
// Btnback.addEventListener("click", () => {
//   alert("Zurück zum Hauptmenü");
// });

// const FavoriteBtn = document.getElementById("weather-app__favorite-btn");
// FavoriteBtn.addEventListener("click", () => {
//   alert("Ort zu Favoriten hinzugefügt");
// });

import { getForecastWeather } from "./api.js";
import { formatTemperature } from "./utils.js";
import { rootElement } from "./main.js";
import { renderSecondLoadingScreen } from "./second_loadingScreen.js";
import { getConditionImagePath } from "./conditions.js";

export async function loadMenu(cityName) {
  renderSecondLoadingScreen(
    "Die Wetterdaten werden für " + cityName + " geladen...",
  );
}
function renderMenu(weatherData) {
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
}

rootElement.innerHTML = getMenuHTML(
  location.name,
  formatTemperature(current.temp_c) + "°",
  current.condition.text,
  "H: " + formatTemperature(currentDay.day.maxtemp_c) + "°",
  "T: " + formatTemperature(currentDay.day.mintemp_c) + "°",
);

function getMenuHTML(title, btnText, searchPlaceholder, searchResults) {
  return `    
         <div class="weather-app__header">   
            <button class="weather-app__return-btn">Zurück</button>
            <button class="weather-app__favorite-btn">Favorit</button>         
        </div>
    <div class="main-menu">
            <div class="main-menu__heading">
            <h1 class="main-menu__title">Wetter</h1>
            <button class="main-menu__btn-edit">Bearbeiten</button>
            </div>
            <div class="main-menu__search">
            <input type="text" placeholder=" Gebe einen Ort ein..." />
            </div>
            <div class="main-menu__search-results">
            <ul>
                <li>Island</li>
                <li>San Francisco</li>
                <li>Bern</li>
                <li>New York</li>
            </ul>
            </div>
    `;
}
