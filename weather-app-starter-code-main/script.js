// Base URL for the OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data for a specified city
async function fetchWeatherData(city) {
    try {
        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = 'ce3c72244e4e5385e8e87581c9e8d7ff';
        const url = `${baseURL}?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        renderWeatherData(data);
    } catch (error) {
        displayErrorMessage('City not found');
    }
}
// Function to render weather data on the webpage
function renderWeatherData(data) {
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    cityElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionElement.textContent = data.weather[0].description;
}
// Function to capture user input and display weather information
function searchCity() {
    const inputElement = document.getElementById('city-input');
    const city = inputElement.value.trim();

    if (city !== '') {
        fetchWeatherData(city);
    }
}
// Function to display error message
function displayErrorMessage(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
}
