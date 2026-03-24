import "./style.scss";
import { fetchWeatherData } from "./fetching.js";
fetchWeatherData();

const placeNameElement = document.querySelector("#place-name");
placeNameElement.textContent = data.current.location.name;
const placeTemperatureElement = document.querySelector("#place-temperature");
placeTemperatureElement.textContent = data.current.temp_c + "°";

const placeConditionElement = document.querySelector("#place-condition");
placeConditionElement.textContent = data.current.condition.text;
const maxMinTemperatureElement = document.querySelector("#max-min-temperature");
maxMinTemperatureElement.textContent = `H:${data.forecast.forecastday[0].temp_max_c}° / T:${data.forecast.forecastday[0].temp_min_c}°`;
