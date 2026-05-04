import { getConditionImagePath } from "./conditions.js";

export function formatTemperature(temperature) {
  return Math.floor(temperature);
}

export function formatClock(clock) {
  return clock.replace(/ ?(AM|PM)/, "").trim();
}

export function setBackground(isDay) {
  const isNight = !isDay;
  console.log(isDay, code, isNight);

  const el = document.getElementById("weather-app");
  const imagePath = getConditionImagePath(code, isNight);

  if (el && imagePath) {
    el.style.backgroundImage = `url(${imagePath})`;
  }
}
