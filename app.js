const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', getWeather);
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBtn.click();
    }
});

function getWeather() {
    const city = searchInput.value.trim();
    if (city.length === 0) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=319d0a6ace6884c10c91ec9e82551118&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error:', error);
            alert('Error fetching weather data.');
        });
}

function displayWeather(data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    resultDiv.innerHTML = `
        <h2>${name}</h2>
        <p>${description}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${speed} m/s</p>
    `;
}

document.getElementById('search-btn').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input');
    var capitalizedInput = searchInput.value.charAt(0).toUpperCase() + searchInput.value.slice(1);
    searchInput.value = capitalizedInput;
});