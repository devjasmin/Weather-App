export let currentCity = "London";

export function setCurrentCity(city) {
  currentCity = city;
  console.log("zeigt aktuelle Stadt", currentCity);
}
