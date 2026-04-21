import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getDayConditions(forecastDay) {
  if (!forecastDay) return "";

  const day = forecastDay[0].day;

  return `
            <p class="today-forecast__condition">Heute ${day.condition.text}. Wind bis zu ${day.maxwind_kph} Km/h.
                </p>           
              `;
}

export function getHourHTML(forecastDay) {
  const todaysHours = forecastDay[0].hour;
  const tomorrowsHours = forecastDay[1].hour;

  const now = new Date();
  const currentHour = now.getHours();

  const upcomingToday = todaysHours.filter((hour) => {
    const hourValue = parseInt(hour.time.split(" ")[1].split(":")[0]);
    return hour.time_epoch * 1000 >= currentHour;
  });

  const nextHours = tomorrowsHours.slice(0, 8);

  const allHours = [...upcomingToday, ...nextHours];

  return ` 
  <div class="today-forecast__hour">
    ${allHours
      .map((hour, index) => {
        const hourValue = parseInt(hour.time.split(" ")[1].split(":")[0]);
        //console.log(hourValue);

        const timeLabel = index === 0 ? "Jetzt" : `${hourValue} Uhr`;

        const icon = hour.condition.icon;
        const temp = hour.temp_c;

        return `
              <div class="today-forecast__hour_container">
                <p class="today-forecast__hour_time">${timeLabel}</p>
                  <div class="today-forecast__hour_icon">
                    <img src=${icon} />
                      <p class="today-forecast__hour_temp">${formatTemperature(temp)}°</p>
                </div>
               </div>             
      `;
      })
      .join("")}
  </div>
`;
}
