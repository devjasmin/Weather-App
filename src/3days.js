import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getDays(forecastday) {
  if (!forecastday) return "";

  return `
            <div class="forecast-days">
              <div class="forecast-days__title">
                       Vorhersage für die nächsten 3 Tage:                      
                       </div>

              <p class="forecast-days__heute">Heute <img src="https:${forecastday.day.condition.icon}" alt="Bild">. H: ${forecastday.day.maxtemp_c} T: ${forecastday.day.mintemp_c}. Wind bis zu ${forecastday.day.maxwind_kph} Km/h.
                  </p>
                   <p class="forecast-days__morgen">Mittwoch <img src="https:${forecastday.day.condition.icon}" alt= "Bild">. H: ${forecastday.day.maxtemp_c} T: ${forecastday.day.mintemp_c}. Wind bis zu ${forecastday.day.maxwind_kph} Km/h.
                  </p>
                   <p class="forecast-days__übermorgen">Donnerstag <img src="https:${forecastday.day.condition.icon}" alt= "Bild">. H: ${forecastday.day.maxtemp_c} T: ${forecastday.day.mintemp_c}. Wind bis zu ${forecastday.day.maxwind_kph} Km/h.
                  </p>
                  </div>
                `;
}
