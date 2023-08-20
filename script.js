// Function to fetch weather data for a specified city
const fetchWeatherData = async (city) => {
    const apiKey = 'ce3c72244e4e5385e8e87581c9e8d7ff';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    renderWeatherData(data);
  } catch (error) {
    displayErrorMessage('City not found');
  }
};

// Function to render weather data on the webpage
const renderWeatherData = (data) => {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
  `;
};

// Function to display error message
const displayErrorMessage = (message) => {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `<p class="error">${message}</p>`;
};

// Add event listener to the search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  const cityInput = document.getElementById('city-input');
  const cityName = cityInput.value.trim();

  if (cityName !== '') {
    fetchWeatherData(cityName);
  } else {
    displayErrorMessage('Please enter a city name');
  }
});