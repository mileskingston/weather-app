const weatherApi = 'http://api.openweathermap.org/data/2.5/forecast?q=London,GB&APPID=126ce05e0df24ddcfd696037ee5df82b'; 

const getWeather = async (productId) => {
  const response = await fetch(weatherApi);
  const json = await response.json();
   if (response.ok) {
    return json;
  }
   const error = {
    ...json,
    status: response.status,
    statusText: response.statusText,
  };
   return Promise.reject(error);
};

export default getWeather;