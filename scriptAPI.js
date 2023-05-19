function getWeather() {
  const cityName = 'Київ';
  const apiKey = '11249ed2f56ec630646ba538bc47a245'; 

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperatureKelvin = data.main.temp;
      const temperatureCelsius = Math.round(temperatureKelvin - 273.15);
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      const weatherDataElement = document.getElementById('weatherData');
      weatherDataElement.innerHTML = `
        <p>Місто: ${cityName}</p>
        <p>Температура: ${temperatureCelsius} °C</p>
        <p>Вологість: ${humidity}%</p>
        <p>Швидкість вітру: ${windSpeed} м/с</p>
      `;
    })
    .catch(error => {
      console.log('Сталася помилка при отриманні даних про погоду:', error);
    });
}