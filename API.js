const API_BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = "c5ef6424830d4eb193d182919261703";

export async function getCurrentWeather(location) {
  const response = await fetch(
    `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=1&lang=de`,
  );

  const weatherData = await response.json();

  console.log(weatherData);

  return weatherData;
}
