export function formatTemperature(temperature) {
  return Math.floor(temperature);
}

export function formatClock(clock) {
  return clock.replace(/ ?(AM|PM)/, "").trim();
}

export function setBackground(isDay) {
  const el = document.getElementById("weather-app");

  el.classList.remove("background-day", "background-night");

  if (isDay) {
    el.classList.add("background-day");
  } else {
    el.classList.add("background-night");
  }
}

// export function setBackground(isNight) {
//   const el = document.getElementById("weather-app");
// }
