import { Component, OnInit } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { ICurrentWeather, IWeatherList } from 'src/app/models/weather'
import { WeatherService } from 'src/app/services/weatherService/weather.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public currentWeather: ICurrentWeather | undefined
  public dailyWeather: IWeatherList | undefined
  public loading = false

  constructor(private weatherService: WeatherService, private loadingService: LoadingController) {}

  ngOnInit(): void {
    //this.loadCurrentWeather()
  }

  public async loadCurrentWeather() {
    const loading = await this.loadingService.create({
      spinner: 'circular'
    })

    await loading.present()

    this.weatherService.getCurrentWeather().subscribe(res => {
      this.currentWeather = res
      loading.dismiss()
      this.loading = false
    })
  }

  public async loadDailyWeather() {
    const loading = await this.loadingService.create({
      spinner: 'circular'
    })

    await loading.present()

    this.weatherService.getDailyWeather().subscribe(res => {
      this.dailyWeather = res
      loading.dismiss()
      this.loading = false
    })
  }
}
