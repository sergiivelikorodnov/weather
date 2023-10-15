import { TestBed } from '@angular/core/testing'

import { CurrentWeatherService } from './weather.service'

describe('CurrentWeatherService', () => {
  let service: CurrentWeatherService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CurrentWeatherService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
