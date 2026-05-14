export let currentCity = "Bern";

export function setCurrentCity(city) {
  currentCity = city;
  alert("zeigt aktuelle Stadt");
  console.log("zeigt aktuelle Stadt", currentCity);
}
