import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getMiniStats(forecastday) {
  if (!forecastday) return "";

  const uv = forecastday[0].day.uv;
  console.log(uv);

  return `
              <div class = "mini-stats__container">
                <div class ="mini-stats__uv">UV-Index:${uv}</div>
               
                  </div>
              `;
}
