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
