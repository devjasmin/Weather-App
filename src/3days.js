import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getDays(forecastday) {
  if (!forecastday) return "";

  const items = forecastday
    .map((days, index) => {
      const labels = ["Heute"];

      const label =
        labels[index] ??
        new Date(days.date)
          .toLocaleDateString("de-DE", {
            weekday: "short",
          })
          .toUpperCase();

      return `      
              <div class="forecast-days__item"> 
      <span class="forecast-days__label-day"> ${label}</span>

      <img class="forecast-days__icon" src="https:${days.day.condition.icon}" alt="Bild">

      <span class="forecast-days__max_temp">
        H: ${formatTemperature(days.day.maxtemp_c)}° 
        </span>

        <span class="forecast-days__min_temp">
        T: ${formatTemperature(days.day.mintemp_c)}° 
        </span>
      
        <span class="forecast-days__wind">
            Wind: ${days.day.maxwind_kph} km/h
          </span>
        </div>
      `;
    })
    .join("");

  return `
  
        <div class = forecast-days__title>
              Vorhersage für die nächsten 3 Tage:
              </div>
     

      ${items}
`;
}
