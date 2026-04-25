import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";

export function getMiniStats(forecastday, current) {
  if (!forecastday) return "";

  const avghumidity = forecastday[0].day.avghumidity;
  const feelslike = current.feelslike_c;
  const moonset = forecastday[0].astro.moonset;
  const sunset = forecastday[0].astro.sunset;
  const precipitation = forecastday[0].day.totalprecip_mm;
  const uv = forecastday[0].day.uv;

  return `  
              <div class ="mini-stats__moisture">Feuchtigkeit: ${avghumidity}%</div>
              <div class ="mini-stats__feelslike">Gefühl: ${formatTemperature(feelslike)}°</div>
              <div class ="mini-stats__moonset">Sonnenaufgang: ${moonset}</div>
               <div class ="mini-stats__sunset">Sonnenuntergang: ${sunset}</div>
               <div class ="mini-stats__precipitation">Niederschlag: ${precipitation} mm</div>
               <div class ="mini-stats__uv">UV-Index: ${uv}</div>

                  </div>
              `;
}
