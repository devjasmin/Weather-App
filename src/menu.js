import { getForecastWeather } from "./API.js";
import { formatTemperature } from "./utils.js";
import { rootElement } from "./main.js";
import { getConditionImagePath } from "./conditions.js";
import { loadDetailView } from "./detailView.js";
import { searchCities } from "./API.js";
//import { setCurrentCity } from "./state.js";

function loadingMenuScreen(cityName) {
  renderLoadingScreen("Die Wetterdaten werden für " + cityName + " geladen...");
}

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
    rootElement.style = `--condition-image: url(${conditionImage})`;
    rootElement.classList.add("show-background");
  }

  // 4. Das HTML erst HIER generieren, wenn weatherData verfügbar ist!
  citiesArray.push({
    name: location.name,
    country: location.country,

    condition: { text: current.condition.text },

    current: { temp_c: current.temp_c },

    currentDay: {
      day: {
        mintemp_c: currentDay.day.mintemp_c,
        maxtemp_c: currentDay.day.maxtemp_c,
      },
    },
  });

  rootElement.innerHTML = getMenuHTML(citiesArray);

  // 5. Suche aktivieren
  const searchInput = document.querySelector(".main-menu__search-bar input");
  const resultsBox = document.getElementById("search-results");

  searchInput.addEventListener("keydown", async (event) => {
    const query = searchInput.value.trim();

    if (event.key === "Enter") {
      if (query !== "") {
        loadDetailView(query);
      }
    }

    // Suche erst ab 2 Zeichen auslösen
    if (query.length >= 2) {
      const result = await searchCities(query);
      //console.log("API liefert Ergbenis: ", result);

      if (result && result.length > 0) {
        // API Antwort herausholen und in der resultsBox anzeigen
        resultsBox.innerHTML = result
          .map(
            (city) =>
              `<div class="search-results-item">${city.name}, ${city.country}</div>`,
          )
          .join("");
      }
      resultsBox.querySelectorAll(".search-results-item").forEach((item) => {
        item.addEventListener("click", () => {
          loadDetailView(item.textContent);
        });
      });
    }
  });
}

document.addEventListener("click", (event) => {
  // Wir prüfen, ob der Klick innerhalb der gesamten Such-Sektion war
  const searchContainer = event.target.closest(".main-menu__search-bar");

  // Wenn der Klick AUSSERHALB war (!searchContainer)
  if (!searchContainer) {
    // Wir suchen die Elemente genau jetzt im Dokument
    const box = document.getElementById("search-results");
    const input = document.querySelector(".main-menu__search-bar input");

    // 3. Nur wenn die Elemente existieren, leeren wir sie
    if (box) {
      box.innerHTML = "";
    }
    if (input) {
      input.value = "";
    }
  }
});

const citiesArray = [];

function getCities(cities) {
  return cities
    .map(
      (city) => `
    <div class="city-wrapper">
    <div class="city">
    <div class="city_column_left">
    <p class="city_name">${city.name}</p>
    <p class="city_country">${city.country}</p>
    <p class="city_condition">${city.condition.text}</p>
    </div>
    <div class="city_column_right">
    <p class="city_temperature">
    ${formatTemperature(city.current.temp_c)}°
    </p>
    <p class="city_min_max_temperature">
    T: ${formatTemperature(city.currentDay.day.mintemp_c)}°
    / H: ${formatTemperature(city.currentDay.day.maxtemp_c)}°
    </p>
    </div>
    </div>
    </div>
    `,
    )
    .join("");
}

// 7. Die Funktion braucht die Variablen als "Eingabe" (Argumente), der Wert ist fix.

function getMenuHTML(cities) {
  return `
    <div class="main-menu">

      <div class="main-menu__heading">
        <h1 class="main-menu__title">Wetter</h1>
        <button class="main-menu__btn-edit">Bearbeiten</button>
      </div>

      <div class="main-menu__search-bar">
        <input type="text" class="main-menu__search-input" placeholder="Bitte gib einen Ort ein..." />
        <div id="search-results" class="main-menu__search-results"></div>
      </div>

       <div class="main-menu__cities-list">
         ${getCities(cities)}
       
        </div>
    </div>
  `;
}
