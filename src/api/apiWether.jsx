import { request } from "./request.jsx";

const HOST = "https://api.openweathermap.org/data/2.5";
const TOKEN = `c8bbf25c6ed1acc8117e937ff015db3f`;

export const getCurrentWeather = (city, units = 'metric') => {
  const url = `${HOST}/weather`;
  const  params = new URLSearchParams({
    q: city,
    units,
    appid: TOKEN,
  }).toString();
  
  return request(url, params);
};
