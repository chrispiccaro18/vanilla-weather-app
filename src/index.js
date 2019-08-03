import { weatherApi, cleanForecast } from './services/weatherApi.js';
import renderForecast from './render-forecast.js';

const searchForm = document.getElementById('search-by-zip');
const locationNode = document.getElementById('location');

getWeather('97209');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchFormData = new FormData(searchForm);
  const zipCode = searchFormData.get('zipCode');

  getWeather(zipCode);

});

function getWeather(zipCode) {
  weatherApi(zipCode)
    .then(response => {
      const { city, state } = response.location;
      locationNode.textContent = `${city}, ${state}`;
      
      const cleanedForecast = cleanForecast(response.forecasts);
      renderForecast(cleanedForecast.slice(0, 5));
    });
}
