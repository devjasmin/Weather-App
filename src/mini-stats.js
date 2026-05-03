import { formatTemperature } from "./utils";
import { getForecastWeather } from "./API";
import { formatClock } from "./utils";

export function getMiniStats(forecastday, current) {
  if (!forecastday) return "";

  const avghumidity = forecastday[0].day.avghumidity;
  const feelslike = current.feelslike_c;
  const sunrise = forecastday[0].astro.sunrise;
  const sunset = forecastday[0].astro.sunset;
  const precipitation = forecastday[0].day.totalprecip_mm;
  const uv = forecastday[0].day.uv;

  return ` 
                <div class="mini-stats__heading">
                Feuchtigkeit
                <p class="mini-stats__value"> ${avghumidity}%</p>
                </div>

              <div class ="mini-stats__heading">
                Gefühlt
                <p class ="mini-stats__value"> ${formatTemperature(feelslike)}°</p>
                </div>

              <div class ="mini-stats__heading">
                Sonnenaufgang
                <p class ="mini-stats__value"> ${formatClock(sunrise)} Uhr</p>              
                </div>
             
               <div class ="mini-stats__heading">
                Sonnenuntergang 
                <p class ="mini-stats__value"> ${formatClock(sunset)} Uhr</p>
                </div>

               <div class ="mini-stats__heading">
                Niederschlag
                <p class ="mini-stats__value"> ${precipitation} mm</p>
                </div>
               
               <div class ="mini-stats__heading">
                UV-Index 
                <p class ="mini-stats__value"> ${uv}</p>
                </div>
               
           
             `;
}
