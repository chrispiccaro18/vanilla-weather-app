import { createForecastLi } from '../src/render-forecast.js';

const test = QUnit.test;

QUnit.module('Render Forecast');

test('creates li', function(assert) {
	//Arrange
  const expected = /*html*/`
    <li class="day">
      <p class="name">This Afternoon</p>
      <p class="temp">76°F</p>
      <img src="https://api.weather.gov/icons/land/day/tsra,40?size=medium" alt="weather icon" class="icon">
      <p class="short">Showers And Thunderstorms</p>
    </li>
  `;

  const forecast = {
    'number': 1,
    'name': 'This Afternoon',
    'startTime': '2019-08-02T12:00:00-05:00',
    'endTime': '2019-08-02T18:00:00-05:00',
    'isDaytime': true,
    'temperature': 76,
    'temperatureUnit': 'F',
    'temperatureTrend': null,
    'windSpeed': '5 mph',
    'windDirection': 'SE',
    'icon': 'https://api.weather.gov/icons/land/day/tsra,40?size=medium',
    'shortForecast': 'Showers And Thunderstorms',
    'detailedForecast': 'Showers and thunderstorms before 4pm, then a chance of showers and thunderstorms. Some of the storms could produce heavy rain. Cloudy, with a high near 76. Southeast wind around 5 mph. Chance of precipitation is 40%.'
  };

	//Act 
  const result = createForecastLi(forecast);

	//Assert
  assert.htmlEqual(result, expected);
});
