import forecast from '../data/mock.js';
import { cleanForecast } from '../src/services/weatherApi.js';

const test = QUnit.test;

QUnit.module('Clean Forecast');

test('cleans forecast', function(assert) {
  //Arrange
  const expected = [
    {
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
    },
    {
      'number': 3,
      'name': 'Saturday',
      'startTime': '2019-08-03T06:00:00-05:00',
      'endTime': '2019-08-03T18:00:00-05:00',
      'isDaytime': true,
      'temperature': 79,
      'temperatureUnit': 'F',
      'temperatureTrend': null,
      'windSpeed': '5 mph',
      'windDirection': 'E',
      'icon': 'https://api.weather.gov/icons/land/day/tsra_sct,30?size=medium',
      'shortForecast': 'Chance Showers And Thunderstorms',
      'detailedForecast': 'A chance of showers and thunderstorms before 1pm. Some of the storms could produce heavy rain. Partly sunny, with a high near 79. East wind around 5 mph. Chance of precipitation is 30%.'
    },
    {
      'number': 5,
      'name': 'Sunday',
      'startTime': '2019-08-04T06:00:00-05:00',
      'endTime': '2019-08-04T18:00:00-05:00',
      'isDaytime': true,
      'temperature': 84,
      'temperatureUnit': 'F',
      'temperatureTrend': null,
      'windSpeed': '0 to 5 mph',
      'windDirection': 'E',
      'icon': 'https://api.weather.gov/icons/land/day/sct?size=medium',
      'shortForecast': 'Mostly Sunny',
      'detailedForecast': 'Mostly sunny, with a high near 84. East wind 0 to 5 mph.'
    },
    {
      'number': 7,
      'name': 'Monday',
      'startTime': '2019-08-05T06:00:00-05:00',
      'endTime': '2019-08-05T18:00:00-05:00',
      'isDaytime': true,
      'temperature': 87,
      'temperatureUnit': 'F',
      'temperatureTrend': null,
      'windSpeed': '5 mph',
      'windDirection': 'SW',
      'icon': 'https://api.weather.gov/icons/land/day/sct?size=medium',
      'shortForecast': 'Mostly Sunny',
      'detailedForecast': 'Mostly sunny, with a high near 87.'
    },
    {
      'number': 9,
      'name': 'Tuesday',
      'startTime': '2019-08-06T06:00:00-05:00',
      'endTime': '2019-08-06T18:00:00-05:00',
      'isDaytime': true,
      'temperature': 86,
      'temperatureUnit': 'F',
      'temperatureTrend': null,
      'windSpeed': '5 mph',
      'windDirection': 'NW',
      'icon': 'https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium',
      'shortForecast': 'Slight Chance Showers And Thunderstorms',
      'detailedForecast': 'A slight chance of showers and thunderstorms before 1pm. Mostly sunny, with a high near 86. Chance of precipitation is 20%.'
    },
    {
      'number': 11,
      'name': 'Wednesday',
      'startTime': '2019-08-07T06:00:00-05:00',
      'endTime': '2019-08-07T18:00:00-05:00',
      'isDaytime': true,
      'temperature': 86,
      'temperatureUnit': 'F',
      'temperatureTrend': null,
      'windSpeed': '5 mph',
      'windDirection': 'SE',
      'icon': 'https://api.weather.gov/icons/land/day/tsra_hi,20/few?size=medium',
      'shortForecast': 'Slight Chance Showers And Thunderstorms then Sunny',
      'detailedForecast': 'A slight chance of showers and thunderstorms before 7am. Sunny, with a high near 86. Chance of precipitation is 20%.'
    },
    {
      'number': 13,
      'name': 'Thursday',
      'startTime': '2019-08-08T06:00:00-05:00',
      'endTime': '2019-08-08T18:00:00-05:00',
      'isDaytime': true,
      'temperature': 84,
      'temperatureUnit': 'F',
      'temperatureTrend': null,
      'windSpeed': '5 mph',
      'windDirection': 'S',
      'icon': 'https://api.weather.gov/icons/land/day/tsra_hi,20?size=medium',
      'shortForecast': 'Slight Chance Showers And Thunderstorms',
      'detailedForecast': 'A slight chance of showers and thunderstorms. Mostly sunny, with a high near 84. Chance of precipitation is 20%.'
    }
  ];
  
  //Act 
  const result = cleanForecast(forecast);

  //Assert
  assert.deepEqual(result, expected);
});
