import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  getApiKey(): string {
    return environment.apiKey
  }

  getWeatherBaseUrlKey(): string {
    return environment.weatherURL
  }

  getDailyWeatherBaseUrlKey(): string {
    return environment.dailyWeatherURL
  }
}
