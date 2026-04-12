import { rootElement } from "./main.js";
import { getForecastWeather } from "./API.js";
import { formatTemperature } from "./utils.js";
import { renderLoadingScreen } from "./loadingScreen.js";

export async function loadDetailView(cityName) {
  renderLoadingScreen("Die Wetterdaten werden für " + cityName + " geladen...");
  // daten fetchen
  const weatherData = await getForecastWeather(cityName);
  renderDetailView(weatherData); // hier auskommentieren, damit ich nur den Ladespinner sehe
  // event listener registieren
}

function renderDetailView(weatherData) {
  const { location, current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];

  rootElement.innerHTML = getHeaderHTML(
    location.name,
    formatTemperature(current.temp_c) + "°",
    current.condition.text,
    "H: " + formatTemperature(currentDay.day.maxtemp_c) + "°",
    "T: " + formatTemperature(currentDay.day.mintemp_c) + "°",
  );
}

function getHeaderHTML(location, currentTemp, condition, maxTemp, minTemp) {
  return `    
         <div class="weather-app__header">            
      </div>
      <div class="weather-app__main">
        <div class="weather-app__place-name" >${location}</div>
        <div class="weather-app__place-temperature" >${currentTemp}</div>
        <div class="weather-app__place-condition">${condition}</div>
        <div class="weather-app__place-max-temperature">${maxTemp}</div>
        <div class="weather-app__place-min-temperature">${minTemp}</div>
        </div>      
    `;
}

getHeaderHTML();

// const Btnback = document.getElementById("weather-app__return-btn");
// Btnback.addEventListener("click", () => {
//   alert("Zurück zum Hauptmenü");
// });

// const FavoriteBtn = document.getElementById("weather-app__favorite-btn");
// FavoriteBtn.addEventListener("click", () => {
//   alert("Ort zu Favoriten hinzugefügt");
// });
