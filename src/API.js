const API_BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = "c5ef6424830d4eb193d182919261703";
const FAVORIT_CITIES_KEY = "favorite-cities";

export async function getForecastWeather(location, days = 3, hours = 24) {
  const response = await fetch(
    `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&lang=de&days=${days}`,
  );

  const weatherData = await response.json();

  //console.log(weatherData);

  return weatherData;
}

export async function searchCities(query) {
  const response = await fetch(
    `${API_BASE_URL}/search.json?key=${API_KEY}&q=${query}&lang=de`,
  );

  const cities = await response.json();

  //console.log(cities);

  return cities;
}

export function getFavoriteCities() {
  return JSON.parse(localStorage.getItem(FAVORIT_CITIES_KEY)) || [];
}

export function saveCityAsFavorite(city) {
  const favorites = getFavoriteCities();

  if (favorites.find((favorite) => favorite === city)) {
    alert(city + "wurde bereits zu den Favoriten hinzugefügt");
    return;
  }

  favorites.push(city);

  localStorage.setItem(FAVORIT_CITIES_KEY, JSON.stringify(favorites));
}
