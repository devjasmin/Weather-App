import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getDays(forecastday) {
  if (!forecastday) return "";

  const items = forecastday
    .map((days, index) => {
      const label =
        index === 0
          ? "Heute"
          : index === 1
            ? "Morgen"
            : new Date(days.date).toLocaleDateString("de-DE", {
                weekday: "long",
              });

      return `      
                <div class="forecast-days__item">
               
                <p class="forecast-days__label-day">${label}
                <img src="https:${days.day.condition.icon}" alt="Bild"> H: ${formatTemperature(days.day.maxtemp_c)}° T: ${formatTemperature(days.day.mintemp_c)}°  Wind bis zu ${days.day.maxwind_kph} Km/h
                  </p>
                   </div>
                `;
    })
    .join("");

  return `
  
        <div class = forecast-days__title>
              Vorhersage für 3 Tage:
              </div>

      </div>

      ${items}
`;
}
