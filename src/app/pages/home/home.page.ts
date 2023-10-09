import { Component, OnInit } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { weatherToday } from 'src/app/data/weaterToday'
import { weatherData } from 'src/app/data/weatherData'
import { currentWeatherDTO, GroupedWeatherData, ICurrentWeather, IWeatherList } from 'src/app/models/weather'
import { WeatherService } from 'src/app/services/weatherService/weather.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public currentWeaterData: currentWeatherDTO = new currentWeatherDTO()
  public dailyWeather: IWeatherList | undefined

  constructor(private weatherService: WeatherService, private loadingService: LoadingController) {}

  ngOnInit(): void {
    this.loadCurrentWeather()
    this.loadDailyWeather()
  }

  public async loadCurrentWeather() {
    const loading = await this.loadingService.create({
      spinner: 'circular'
    })

    await loading.present()
    const currentWeather = weatherToday
    this.currentWeaterData = {
      img: this.selectImage(currentWeather.weather[0].id),
      tempMin: currentWeather.main['temp_min'],
      tempMax: currentWeather.main['temp_max'],
      feelsLike: currentWeather.main['feels_like'],
      city: currentWeather.name,
      cast: currentWeather.weather[0].main,
      castDescription: currentWeather.weather[0].description,
      date: new Date()
    }
    loading.dismiss()

    /* this.weatherService.getCurrentWeather().subscribe(res => {
      this.currentWeather = res
      loading.dismiss()
    }) */
  }

  public async loadDailyWeather() {
    /* const loading = await this.loadingService.create({
      spinner: 'circular'
    })

    await loading.present()*/

    this.dailyWeather = weatherData

    const groupedData: GroupedWeatherData = {}

    weatherData.list.forEach(item => {
      const date = new Date(item.dt_txt.split(' ')[0]) // Extract date from dt_txt
      const dateString = date.toISOString().split('T')[0] // Convert date to string

      if (!groupedData[dateString]) {
        groupedData[dateString] = {
          date: date,
          tempMin: Math.round(item.main.temp_min),
          tempMax: Math.round(item.main.temp_max),
          cast: item.weather[0].main,
          castDescription: item.weather[0].description,
          img: this.selectImage(item.weather[0].id)
        }
      } else {
        if (item.main.temp_min < groupedData[dateString].tempMin) {
          groupedData[dateString].tempMin = Math.round(item.main.temp_min)
        }
        if (item.main.temp_max > groupedData[dateString].tempMax) {
          groupedData[dateString].tempMax = Math.round(item.main.temp_max)
          groupedData[dateString].img = this.selectImage(item.weather[0].id)
        }
      }
    })

    // Create the new array from the grouped data
    const dailyWeatherData = Object.values(groupedData)
    console.log(dailyWeatherData)
    /* this.weatherService.getDailyWeather().subscribe(res => {
      this.dailyWeather = res
      loading.dismiss()
    }) */
  }

  private selectImage(id: number) {
    // Determine img based on weather.id
    if (id >= 100 && id <= 199) {
      return 'assets/img1.png' // Replace with your image URL
    } else if (id >= 200 && id <= 299) {
      return 'assets/img2.png' // Replace with your image URL
    } else {
      return 'default.png' // Default image
    }
  }
}
