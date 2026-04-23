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
            ? "Mittwoch"
            : new Date(days.date).toLocaleDateString("de-DE", {
                weekday: "long",
              });

      return `       

                <div class= forecast-days__item>
               
                <p class="forecast-days__label-day">${label}
                <img src="https:${days.day.condition.icon}" alt="Bild"> H: ${days.day.maxtemp_c} T: ${days.day.mintemp_c}. Wind bis zu ${days.day.maxwind_kph} Km/h.
                  </p>
                  </div>
                  </div>
                `;
    })
    .join("");

  return items;
}

getDays();
