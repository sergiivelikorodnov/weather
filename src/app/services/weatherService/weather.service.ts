import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, delay, Observable, retry, throwError } from 'rxjs'
import { ICurrentWeather, IWeatherList } from '../../models/weather'
import { EnviromentService } from '../enviromentService/enviroment.service'
import { ErrorService } from '../errorService/error.service'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient, private errorService: ErrorService, private envService: EnviromentService) {}

  //get Weather from API. Made manual delay to see loading and 2 retry if connection is lost
  getCurrentWeather(): Observable<ICurrentWeather> {
    return this.http
      .get<ICurrentWeather>(`${this.envService.getWeatherBaseUrlKey()}${this.envService.getApiKey()}`)
      .pipe(delay(100), retry(2), catchError(this.errorHandler.bind(this)))
  }

  getDailyWeather(): Observable<IWeatherList> {
    return this.http
      .get<IWeatherList>(`${this.envService.getDailyWeatherBaseUrlKey()}${this.envService.getApiKey()}`)
      .pipe(delay(100), retry(2), catchError(this.errorHandler.bind(this)))
  }

  //Error handler
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }
}
