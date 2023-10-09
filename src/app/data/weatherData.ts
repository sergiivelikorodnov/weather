import { IWeatherList } from '../models/weather'

export const weaterData: IWeatherList = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1696852800,
      main: {
        temp: 18.83,
        feels_like: 18.31,
        temp_min: 18.83,
        temp_max: 22.78,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 987,
        humidity: 59,
        temp_kf: -3.95
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 29
      },
      wind: {
        speed: 1.58,
        deg: 198,
        gust: 2.95
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-09 12:00:00'
    },
    {
      dt: 1696863600,
      main: {
        temp: 19.64,
        feels_like: 19.41,
        temp_min: 19.64,
        temp_max: 21.03,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 986,
        humidity: 67,
        temp_kf: -1.39
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 66
      },
      wind: {
        speed: 0.91,
        deg: 116,
        gust: 1.87
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-09 15:00:00'
    },
    {
      dt: 1696874400,
      main: {
        temp: 17.61,
        feels_like: 17.38,
        temp_min: 17.61,
        temp_max: 17.61,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 988,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 0.6,
        deg: 253,
        gust: 0.75
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-09 18:00:00'
    },
    {
      dt: 1696885200,
      main: {
        temp: 17.09,
        feels_like: 16.81,
        temp_min: 17.09,
        temp_max: 17.09,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.86,
        deg: 230,
        gust: 2.37
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-09 21:00:00'
    },
    {
      dt: 1696896000,
      main: {
        temp: 16.17,
        feels_like: 15.67,
        temp_min: 16.17,
        temp_max: 16.17,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.21,
        deg: 316,
        gust: 1.32
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-10 00:00:00'
    },
    {
      dt: 1696906800,
      main: {
        temp: 15.73,
        feels_like: 15.21,
        temp_min: 15.73,
        temp_max: 15.73,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 988,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.06,
        deg: 261,
        gust: 1
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-10 03:00:00'
    },
    {
      dt: 1696917600,
      main: {
        temp: 16.1,
        feels_like: 15.57,
        temp_min: 16.1,
        temp_max: 16.1,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.55,
        deg: 225,
        gust: 0.89
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-10 06:00:00'
    },
    {
      dt: 1696928400,
      main: {
        temp: 21.41,
        feels_like: 20.99,
        temp_min: 21.41,
        temp_max: 21.41,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 990,
        humidity: 53,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 50
      },
      wind: {
        speed: 1.22,
        deg: 121,
        gust: 1.73
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-10 09:00:00'
    },
    {
      dt: 1696939200,
      main: {
        temp: 23.86,
        feels_like: 23.55,
        temp_min: 23.86,
        temp_max: 23.86,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 989,
        humidity: 48,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 68
      },
      wind: {
        speed: 1.25,
        deg: 144,
        gust: 1.89
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-10 12:00:00'
    },
    {
      dt: 1696950000,
      main: {
        temp: 21.26,
        feels_like: 21.19,
        temp_min: 21.26,
        temp_max: 21.26,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 988,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 89
      },
      wind: {
        speed: 1.16,
        deg: 112,
        gust: 1.38
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-10 15:00:00'
    },
    {
      dt: 1696960800,
      main: {
        temp: 15.53,
        feels_like: 15.46,
        temp_min: 15.53,
        temp_max: 15.53,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 990,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 94
      },
      wind: {
        speed: 1.08,
        deg: 51,
        gust: 1.49
      },
      visibility: 10000,
      pop: 0.21,
      rain: {
        '3h': 0.22
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-10 18:00:00'
    },
    {
      dt: 1696971600,
      main: {
        temp: 13.69,
        feels_like: 13.6,
        temp_min: 13.69,
        temp_max: 13.69,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 991,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 33
      },
      wind: {
        speed: 0.62,
        deg: 354,
        gust: 0.69
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.1
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-10 21:00:00'
    },
    {
      dt: 1696982400,
      main: {
        temp: 12.91,
        feels_like: 12.76,
        temp_min: 12.91,
        temp_max: 12.91,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 991,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 17
      },
      wind: {
        speed: 0.66,
        deg: 300,
        gust: 0.79
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-11 00:00:00'
    },
    {
      dt: 1696993200,
      main: {
        temp: 12.51,
        feels_like: 12.32,
        temp_min: 12.51,
        temp_max: 12.51,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 991,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 0.66,
        deg: 251,
        gust: 0.64
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-11 03:00:00'
    },
    {
      dt: 1697004000,
      main: {
        temp: 13.2,
        feels_like: 13.03,
        temp_min: 13.2,
        temp_max: 13.2,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 991,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 0.97,
        deg: 220,
        gust: 0.99
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-11 06:00:00'
    },
    {
      dt: 1697014800,
      main: {
        temp: 19.51,
        feels_like: 19.32,
        temp_min: 19.51,
        temp_max: 19.51,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 991,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 1.71,
        deg: 178,
        gust: 2.87
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-11 09:00:00'
    },
    {
      dt: 1697025600,
      main: {
        temp: 23.17,
        feels_like: 22.98,
        temp_min: 23.17,
        temp_max: 23.17,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 990,
        humidity: 55,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 36
      },
      wind: {
        speed: 2.51,
        deg: 178,
        gust: 3.85
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-11 12:00:00'
    },
    {
      dt: 1697036400,
      main: {
        temp: 21.33,
        feels_like: 21.24,
        temp_min: 21.33,
        temp_max: 21.33,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 988,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 82
      },
      wind: {
        speed: 2.14,
        deg: 176,
        gust: 4.86
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-11 15:00:00'
    },
    {
      dt: 1697047200,
      main: {
        temp: 15.98,
        feels_like: 15.85,
        temp_min: 15.98,
        temp_max: 15.98,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 988,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 67
      },
      wind: {
        speed: 1.74,
        deg: 234,
        gust: 1.67
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-11 18:00:00'
    },
    {
      dt: 1697058000,
      main: {
        temp: 15.02,
        feels_like: 14.88,
        temp_min: 15.02,
        temp_max: 15.02,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 988,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 13
      },
      wind: {
        speed: 1.58,
        deg: 257,
        gust: 1.5
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-11 21:00:00'
    },
    {
      dt: 1697068800,
      main: {
        temp: 14.52,
        feels_like: 14.33,
        temp_min: 14.52,
        temp_max: 14.52,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 987,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 12
      },
      wind: {
        speed: 1.61,
        deg: 256,
        gust: 1.63
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-12 00:00:00'
    },
    {
      dt: 1697079600,
      main: {
        temp: 13.94,
        feels_like: 13.74,
        temp_min: 13.94,
        temp_max: 13.94,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 987,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 13
      },
      wind: {
        speed: 1.48,
        deg: 275,
        gust: 1.39
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-12 03:00:00'
    },
    {
      dt: 1697090400,
      main: {
        temp: 14.53,
        feels_like: 14.28,
        temp_min: 14.53,
        temp_max: 14.53,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 988,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 34
      },
      wind: {
        speed: 1.14,
        deg: 274,
        gust: 1.15
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-12 06:00:00'
    },
    {
      dt: 1697101200,
      main: {
        temp: 21.92,
        feels_like: 21.71,
        temp_min: 21.92,
        temp_max: 21.92,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 20
      },
      wind: {
        speed: 0.08,
        deg: 156,
        gust: 0.86
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-12 09:00:00'
    },
    {
      dt: 1697112000,
      main: {
        temp: 24.61,
        feels_like: 24.41,
        temp_min: 24.61,
        temp_max: 24.61,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 989,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 37
      },
      wind: {
        speed: 1.12,
        deg: 153,
        gust: 1.28
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-12 12:00:00'
    },
    {
      dt: 1697122800,
      main: {
        temp: 22.52,
        feels_like: 22.52,
        temp_min: 22.52,
        temp_max: 22.52,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 988,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 79
      },
      wind: {
        speed: 1.17,
        deg: 143,
        gust: 1.39
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-12 15:00:00'
    },
    {
      dt: 1697133600,
      main: {
        temp: 17.05,
        feels_like: 16.93,
        temp_min: 17.05,
        temp_max: 17.05,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 75
      },
      wind: {
        speed: 1.35,
        deg: 259,
        gust: 1.28
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-12 18:00:00'
    },
    {
      dt: 1697144400,
      main: {
        temp: 15.72,
        feels_like: 15.51,
        temp_min: 15.72,
        temp_max: 15.72,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 56
      },
      wind: {
        speed: 1.23,
        deg: 281,
        gust: 1.18
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-12 21:00:00'
    },
    {
      dt: 1697155200,
      main: {
        temp: 14.91,
        feels_like: 14.65,
        temp_min: 14.91,
        temp_max: 14.91,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 39
      },
      wind: {
        speed: 1.24,
        deg: 281,
        gust: 1.21
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-13 00:00:00'
    },
    {
      dt: 1697166000,
      main: {
        temp: 14.44,
        feels_like: 14.13,
        temp_min: 14.44,
        temp_max: 14.44,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 989,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 72
      },
      wind: {
        speed: 1.21,
        deg: 288,
        gust: 1.15
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-13 03:00:00'
    },
    {
      dt: 1697176800,
      main: {
        temp: 14.56,
        feels_like: 14.24,
        temp_min: 14.56,
        temp_max: 14.56,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 990,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 75
      },
      wind: {
        speed: 0.93,
        deg: 279,
        gust: 1.02
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-13 06:00:00'
    },
    {
      dt: 1697187600,
      main: {
        temp: 21.56,
        feels_like: 21.31,
        temp_min: 21.56,
        temp_max: 21.56,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 990,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 39
      },
      wind: {
        speed: 0.41,
        deg: 165,
        gust: 0.94
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-13 09:00:00'
    },
    {
      dt: 1697198400,
      main: {
        temp: 24.32,
        feels_like: 24.09,
        temp_min: 24.32,
        temp_max: 24.32,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 989,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 51
      },
      wind: {
        speed: 1.49,
        deg: 165,
        gust: 2.25
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-13 12:00:00'
    },
    {
      dt: 1697209200,
      main: {
        temp: 22.17,
        feels_like: 22.11,
        temp_min: 22.17,
        temp_max: 22.17,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 987,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 72
      },
      wind: {
        speed: 1.5,
        deg: 160,
        gust: 2.96
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-13 15:00:00'
    },
    {
      dt: 1697220000,
      main: {
        temp: 16.67,
        feels_like: 16.48,
        temp_min: 16.67,
        temp_max: 16.67,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 987,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 40
      },
      wind: {
        speed: 1.71,
        deg: 229,
        gust: 1.68
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-13 18:00:00'
    },
    {
      dt: 1697230800,
      main: {
        temp: 15.6,
        feels_like: 15.41,
        temp_min: 15.6,
        temp_max: 15.6,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 986,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 3
      },
      wind: {
        speed: 1.97,
        deg: 230,
        gust: 2.6
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-13 21:00:00'
    },
    {
      dt: 1697241600,
      main: {
        temp: 14.4,
        feels_like: 14.25,
        temp_min: 14.4,
        temp_max: 14.4,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 984,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 2
      },
      wind: {
        speed: 2.07,
        deg: 227,
        gust: 3.78
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-14 00:00:00'
    },
    {
      dt: 1697252400,
      main: {
        temp: 13.56,
        feels_like: 13.43,
        temp_min: 13.56,
        temp_max: 13.56,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 982,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.36,
        deg: 231,
        gust: 4.76
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-10-14 03:00:00'
    },
    {
      dt: 1697263200,
      main: {
        temp: 13.54,
        feels_like: 13.35,
        temp_min: 13.54,
        temp_max: 13.54,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 982,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 3
      },
      wind: {
        speed: 2.15,
        deg: 238,
        gust: 4.55
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-14 06:00:00'
    },
    {
      dt: 1697274000,
      main: {
        temp: 20.93,
        feels_like: 20.67,
        temp_min: 20.93,
        temp_max: 20.93,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 982,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 19
      },
      wind: {
        speed: 2.51,
        deg: 235,
        gust: 4.26
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-10-14 09:00:00'
    }
  ],
  city: {
    id: 3195506,
    name: 'Maribor',
    coord: {
      lat: 46.5547,
      lon: 15.6459
    },
    country: 'SI',
    population: 89056,
    timezone: 7200,
    sunrise: 1696827948,
    sunset: 1696868611
  }
}
