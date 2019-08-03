import { weatherApi } from './services/weatherApi.js';

const searchForm = document.getElementById('search-by-zip');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchFormData = new FormData(searchForm);
  const zipCode = searchFormData.get('zipCode');

  weatherApi(zipCode)
    .then(response => {
      console.log(response);
    });

});
