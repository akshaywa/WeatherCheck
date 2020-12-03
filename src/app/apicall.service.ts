import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName?: string, countryName?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiKey: string = "dd9b0500dd6b376e09a395ca5de98ebe";
      let place = cityName ? (countryName ? (cityName+=','+countryName) : cityName) : countryName;
      let weatherUrl: string = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey;

      this.http.get(weatherUrl).toPromise()
        .then(resolve)
        .catch(() => {
          reject("there was an error processing your request");
        }
        )
    })
  }
}
