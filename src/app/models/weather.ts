export interface IWeatherItem {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  rain?: {
    '3h': number
  }
  sys: {
    pod: string
  }
  dt_txt: string
}

export interface IWeatherList {
  cod: string
  message: number
  cnt: number
  list: IWeatherItem[]
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

export interface ICurrentWeather {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

interface WeatherData {
  date: Date
  img: string | undefined
  tempMin: number
  tempMax: number
  cast: string | undefined
  castDescription: string | undefined
}
export interface GroupedWeatherData {
  [dateString: string]: WeatherData
}

export class currentWeatherDTO {
  constructor() {
    this.date = new Date()
    this.img = this.tempMin = this.tempMax = this.cast = this.castDescription = undefined
    this.city = this.feelsLike = undefined
  }
  date: Date
  img: string | undefined
  windSpeed: number | undefined
  temp: number | undefined
  tempMin: number | undefined
  tempMax: number | undefined
  cast: string | undefined
  castDescription: string | undefined
  city: string | undefined
  feelsLike: number | undefined
}

export class dailyWeatherDTO {
  constructor() {
    this.date = undefined
    this.img = this.cast = this.castDescription = undefined
    this.tempMin = this.tempMax = 0
  }
  date: string | undefined
  img: string | undefined
  tempMin: number
  tempMax: number
  cast: string | undefined
  castDescription: string | undefined
}
