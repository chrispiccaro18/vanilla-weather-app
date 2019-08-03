import { weatherApi, cleanForecast } from './services/weatherApi.js';
import forecasts from '../data/mock.js';
import renderForecast from './render-forecast.js';

const searchForm = document.getElementById('search-by-zip');

const cleanedForecast = cleanForecast(forecasts);
renderForecast(cleanedForecast.slice(0, 5));

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchFormData = new FormData(searchForm);
  const zipCode = searchFormData.get('zipCode');

  weatherApi(zipCode)
    .then(response => {
      const cleanedForecast = cleanForecast(response);
      renderForecast(cleanedForecast.slice(0, 5));
    });

});
