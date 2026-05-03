export function formatTemperature(temperature) {
  return Math.floor(temperature);
}

export function formatClock(clock) {
  return clock.replace(/ ?(AM|PM)/, "").trim();
}

export function setBackground(isDay) {
  const code = wetterData.current.condition.code;
  const isNight = wetterData.current.is_day === 0;

  const el = document.getElementById("weather-app");
  const imagePath = getConditionImagePath(code, isNight);

  if (imagePath) {
    el.style.backgroundImage = `url(${imagePath})`;
  } else {
    el.style.backgroundImage = `url(${imagePath})`;
  }
}
