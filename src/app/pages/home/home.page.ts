import { Component, OnInit } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { TranslateService } from '@ngx-translate/core'
import * as moment from 'moment'
import { currentWeatherDTO, dailyWeatherDTO, GroupedWeatherData, IWeatherList } from 'src/app/models/weather'
import { LocalStorageService } from 'src/app/services/localStorageService/local-storage.service'
import { WeatherService } from 'src/app/services/weatherService/weather.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public currentWeaterData: currentWeatherDTO = new currentWeatherDTO()
  public dailyWeather: IWeatherList | undefined
  public dailyWeatherData: dailyWeatherDTO[] = []
  public updateWeatherDate: string | undefined = undefined
  public language: string = this.translateService.currentLang

  constructor(
    private weatherService: WeatherService,
    private loadingService: LoadingController,
    private translateService: TranslateService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.updateWeatherDate = this.localStorage.getItem('updateDate')
    this.loadCurrentWeather()
    this.loadDailyWeather()
  }

  public async loadCurrentWeather() {
    const loading = await this.loadingService.create({
      spinner: 'circular'
    })

    await loading.present()

    this.weatherService.getCurrentWeather().subscribe(res => {
      const currentWeather = res
      this.currentWeaterData = {
        img: this.selectImage(currentWeather.weather[0].id),
        temp: currentWeather.main['temp_min'],
        tempMin: currentWeather.main['temp_min'],
        tempMax: currentWeather.main['temp_max'],
        windSpeed: currentWeather.wind['speed'],
        feelsLike: currentWeather.main['feels_like'],
        city: currentWeather.name,
        cast: currentWeather.weather[0].main,
        castDescription: currentWeather.weather[0].description,
        date: new Date()
      }
      const currentDate = moment() // Creates a moment object for the current date and time
      this.updateWeatherDate = currentDate.format('YYYY-MM-DD HH:mm')
      this.localStorage.setItem('updateDate', this.updateWeatherDate)
      loading.dismiss()
    })
  }

  public async loadDailyWeather() {
    const loading = await this.loadingService.create({
      spinner: 'circular'
    })

    await loading.present()

    this.weatherService.getDailyWeather().subscribe(res => {
      this.dailyWeather = res

      const groupedData: GroupedWeatherData = {}

      this.dailyWeather.list.forEach(item => {
        const date = new Date(item.dt_txt.split(' ')[0]) // Extract date from dt_txt
        const dateString = date.toISOString().split('T')[0] // Convert date to string

        if (!groupedData[dateString]) {
          groupedData[dateString] = {
            date: date,
            tempMin: item.main.temp,
            tempMax: item.main.temp,
            cast: item.weather[0].main,
            castDescription: item.weather[0].description,
            img: this.selectImage(item.weather[0].id)
          }
        } else {
          if (item.main.temp < groupedData[dateString].tempMin) {
            groupedData[dateString].tempMin = item.main.temp
          }
          if (item.main.temp > groupedData[dateString].tempMax) {
            groupedData[dateString].tempMax = item.main.temp
          }
        }
      })

      // Create the new array from the grouped data
      const dailyData = Object.values(groupedData)

      if (dailyData && dailyData.length > 1) {
        if (dailyData.length == 6) dailyData.shift()
        for (let w of dailyData) {
          const weatherDTO = new dailyWeatherDTO()
          weatherDTO.img = w.img
          weatherDTO.castDescription = w.castDescription
          weatherDTO.date = moment(w.date).format('dddd')
          weatherDTO.tempMin = w.tempMin
          weatherDTO.tempMax = w.tempMax
          weatherDTO.cast = w.cast

          this.dailyWeatherData.push(weatherDTO)
        }
      }
      loading.dismiss()
    })
  }

  private selectImage(id: number) {
    // Determine img based on weather.id
    if (id == 800) {
      return 'assets/sun1.png'
    } else if (id >= 200 && id <= 299) {
      return 'assets/moon_lighting1.png'
    } else if (id >= 300 && id <= 399) {
      return 'assets/moon_rain1.png'
    } else if (id >= 500 && id <= 599) {
      return 'assets/rain2.png'
    } else if (id >= 600 && id <= 699) {
      return 'assets/rain_snow1.png'
    } else if (id >= 700 && id <= 799) {
      return 'assets/sun_fog1.png'
    } else if (id >= 801 && id <= 899) {
      return 'assets/sun_clouds1.png'
    } else {
      return 'assets/sun1.png' // Default image
    }
  }

  public languageChange(event: any) {
    this.language = event.detail.value
    this.translateService.use(this.language)
  }
}
