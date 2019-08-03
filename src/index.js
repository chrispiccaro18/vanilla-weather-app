import { weatherApi } from './services/weatherApi.js';
import forecasts from '../data/mock.js';
import renderForecast from './render-forecast.js';

const searchForm = document.getElementById('search-by-zip');

renderForecast(forecasts);

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchFormData = new FormData(searchForm);
  const zipCode = searchFormData.get('zipCode');

  weatherApi(zipCode)
    .then(response => {
      console.log(response);
    });

});
