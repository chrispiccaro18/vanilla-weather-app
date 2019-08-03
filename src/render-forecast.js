export const createForecastLi = forecast => {
  const {
    name,
    isDaytime,
    temperature,
    temperatureUnit,
    icon,
    shortForecast
  } = forecast;

  const dayOrNight = isDaytime ? 'day' : 'night';

  const html = /*html*/`
		<li class=${dayOrNight}>
      <p class="name">${name.toLowerCase().includes('this') ? 'Today' : name}</p>
      <p class="temp">${temperature}&deg;${temperatureUnit}</p>
      <img src="${icon}" alt="weather icon" class="icon">
      <p class="short">${shortForecast}</p>
    </li>
	`;

  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content; 
};

const forecastList = document.getElementById('forecast');

export default forecasts => {
  while(forecastList.firstChild) {
    forecastList.removeChild(forecastList.firstChild);
  }

  forecasts.forEach(forecast => {
    forecastList.appendChild(createForecastLi(forecast));
  });
};
