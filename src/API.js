const API_BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = "c5ef6424830d4eb193d182919261703";

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
