// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'f075a44252a942d9308a8c4e3452c124',
  weatherURL: 'https://api.openweathermap.org/data/2.5/weather?q=Maribor,si&APPID=',
  dailyWeatherURL:
    'https://api.openweathermap.org/data/2.5/forecast?lat=46.554650&lon=15.645881&units=metric&cnt=1&appid='
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
