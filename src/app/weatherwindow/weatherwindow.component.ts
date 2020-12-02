import { Component, DoCheck, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-weatherwindow',
  templateUrl: './weatherwindow.component.html',
  styleUrls: ['./weatherwindow.component.css']
})

export class WeatherwindowComponent implements OnInit, DoCheck {
  cityName: string;
  humidity: string;
  temperature: string;
  weather: string;
  wind: string;
  checkWeatherDataisPresent: boolean;

  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
  }

  checkWeather(): void {
    this.apicallService.getWeatherData(this.cityName).then((weatherData: any) => {
      this.humidity = weatherData.main.humidity,
        this.temperature = weatherData.main.temp,
        this.weather = weatherData.weather[0].main,
        this.wind = weatherData.wind.speed
      this.checkWeatherDataisPresent = true;
    }).catch((error: Error) => {
      alert(error);
    })
  }

  ngDoCheck() {
    if (!this.cityName) {
      this.checkWeatherDataisPresent = false;
    }
  }
}
