import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getConditions(day, conditionText, wind_kph) {
  //console.log(forecastDay);
  const conditions = forecast.forecastDay.day;

  return conditions
    .map((conditions) => {
      const day = forecastDay.day;
      const conditionsText = forecastDay.conditionText;
      const wind = forecastDay.wind_kph;

      return `
            <div class="today-forecast">
              <p class="today-forecast__condition">${day}${conditionText}${maxwind_kph}
                </div>
                </div>
                </div>
              `;
    })
    .join("");
}

// function renderCondition (conditionData){
//   const {day,conditionText, wind_kph} = conditionData;
// }

// function renderHours(hourData) {
//   const { hour, icon, temp_c } = hourData;
//   const currentHour = forecast.forecastDay.hour[0];
// }

export function getHourHTML(forecastDay) {
  //console.log(forecastDay);
  const hours = forecastDay[0].hour;

  return hours
    .map((hour) => {
      const time = hour.time;
      const icon = hour.condition.icon;
      const temp = hour.temp_c;

      return `
            <div class="today-forecast__hour">
              <div class="today-forecast__hour__container">
                <p class="today-forecast__hour__time">${time}</p>
                  <div class="today-forecast__hour__icon">
                    <img src=${icon} />
                      <p class="today-forecast__hour__temp">${temp}°</p>
                </div>
                </div>
                </div>
              `;
    })
    .join("");
}

//getHourHTML();
//getConditionHMTL();
