const LAT_LNG_BASE_URL = 'https://zip-to-lat-and-lng.herokuapp.com/api/v1/zip';
const WEATHER_BASE_URL = 'https://api.weather.gov';

// https://api.weather.gov/points/39.7456,-97.0892

export const weatherApi = async zipCode => {
  const latLngRes = await fetch(`${LAT_LNG_BASE_URL}/${zipCode}`);
  const latLng = await latLngRes.json();

  if(Object.entries(latLng).length === 0 && latLng.constructor === Object) {
    return 'invalid zip-code';
  }

  const { lat, lng } = latLng;

  const weatherLocRes = await fetch(`${WEATHER_BASE_URL}/points/${lat},${lng}`);
  const weatherLoc = await weatherLocRes.json();

  const { city, state } = weatherLoc.properties.relativeLocation.properties;
  console.log(city, state);

  const { forecast } = weatherLoc.properties;

  const forecastRes = await fetch(`${forecast}`);
  const forecastObj = await forecastRes.json();
  
  return forecastObj;
};
