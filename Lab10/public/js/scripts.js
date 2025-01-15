function fetchWeatherData() {
  return fetch('http://api.openweathermap.org/data/2.5/weather?q=Кемерово&appid=fcf9440c2966af55ff4f9194132f0a9c&units=metric&lang=ru').then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  });
}

function updateWeatherInfo(weatherData) {
  const weatherElement = document.getElementById('weather-data');
  weatherElement.innerHTML = `
  <h2>${weatherData.name} Погода</h2>
  <p>Температура: ${weatherData.main.temp}°C</p>
  <p>Описание: ${weatherData.weather[0].description}</p>
  `;
}

fetchWeatherData().then(data => updateWeatherInfo(data));