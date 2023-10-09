import { Component, Input, OnInit, EnvironmentInjector } from '@angular/core'
import { ICurrentWeather } from 'src/app/models/weather'

@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent implements OnInit {
  @Input() weather: ICurrentWeather | undefined
  constructor(public environmentInjector: EnvironmentInjector) {}

  ngOnInit() {}
}
