export function formatTemperature(temperature) {
  return Math.floor(temperature);
}

export function formatClock(clock) {
  console.log(clock);

  return clock.replace(/ ?(AM|PM)/, "").trim();
}
