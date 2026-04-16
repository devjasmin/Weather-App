import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

// export function loadingHours(day, conditionIcon, temp) {
//   forecastDay[0];
//   forecastDay.forecast.condition.icon;
//   forecastDay.temp_c;
// }

// export function loadingConditions(day, conditionText, wind_kph) {
//   forecastDay.day;
//   forecastDay.conditionText;
//   forecastDay.wind_kph;
// }

// function renderCondition (conditionData){
//   const {day,conditionText, wind_kph} = conditionData;
// }

// function renderHours(hourData) {
//   const { hour, icon, temp_c } = hourData;
//   const currentHour = forecast.forecastDay.hour[0];
// }

// function getConditionHMTL(day, conditionText, conditionmaxwind_kph) {
//   return `
//        <div class="today-forecast">
//         <p class="today-forecast__condition">${day}${conditionText}${conditionmaxwind_kph}
//           Heute Sonnig. Wind bis zu 16km/h
//         </p>
//       </div>
//     `;
// }

function getHourHTML(hour, icon, temp) {
  const hours = forecastDay[0].hours;

  hours.forEach((hour) => {
    const time = hour.time;
    const icon = hour.condition.icon;
    const temp = hour.temp_c;

    console.log(time, temp, icon);
  });
  return `   
           <div class="today-forecast__hour">
        <div class="today-forecast__hour__container">
          <p class="today-forecast__hour__hour">${hour}Jetzt</p>
          <div class="today-forecast__hour__icon">${icon}
            <img src="./gut-svgrepo-com.svg" alt="Sonne" />
            <p class="today-forecast__hour__temp">${temp}20°</p>
          </div>
        </div>
      </div>   
    `;
}

getConditionHMTL();
getHourHTML();
