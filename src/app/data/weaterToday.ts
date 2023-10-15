import { ICurrentWeather } from '../models/weather'
//MOCK DATA FOR TESTING
export const weatherToday: ICurrentWeather = {
  coord: {
    lon: 15.6467,
    lat: 46.5547
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }
  ],
  base: 'stations',
  main: {
    temp: 29.01,
    feels_like: 28.4,
    temp_min: 28.09,
    temp_max: 29.66,
    pressure: 1022,
    humidity: 63
  },
  visibility: 10000,
  wind: {
    speed: 2.57,
    deg: 190
  },
  clouds: {
    all: 0
  },
  dt: 1696844645,
  sys: {
    type: 2,
    id: 18640,
    country: 'SI',
    sunrise: 1696827948,
    sunset: 1696868611
  },
  timezone: 7200,
  id: 3195506,
  name: 'Maribor',
  cod: 200
}
