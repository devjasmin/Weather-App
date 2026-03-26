const API_ENDPOINT =
  "https://api.weatherapi.com/v1/forecast.json?key=c5ef6424830d4eb193d182919261703&q=Neuenhof&lang=de&days=5";

export async function fetchWeatherData() {
  try {
    const res = await fetch(API_ENDPOINT);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
