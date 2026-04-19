import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getDayConditions(forecastDay) {
  if (!forecastDay) return "";

  const day = forecastDay[0].day;

  return `
            <p class="today-forecast__condition">Heute ${day.condition.text}. Wind ${day.maxwind_kph} Km/h.
                </p>           
              `;
}

export function getHourHTML(forecastDay) {
  const hours = forecastDay[0].hour;
  const now = new Date().getHours();

  return ` 
  <div class="today-forecast__hour">
    ${hours
      .map((hour) => {
        const hourValue = new Date(hour.time).getHours();

        const timeLabel = hourValue === now ? "Jetzt" : `${hourValue} Uhr`;

        const icon = hour.condition.icon;
        const temp = hour.temp_c;

        return `
              <div class="today-forecast__hour__container">
                <p class="today-forecast__hour__time">${timeLabel}</p>
                  <div class="today-forecast__hour__icon">
                    <img src=${icon} />
                      <p class="today-forecast__hour__temp">${temp}°</p>
                </div>
               </div>             
      `;
      })
      .join("")}
  </div>
`;
}
