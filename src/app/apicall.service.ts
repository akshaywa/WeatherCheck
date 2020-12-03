import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityname: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiKey: string = "dd9b0500dd6b376e09a395ca5de98ebe";
      let weatherUrl: string = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + cityname.trim() + "&appid=" + apiKey;

      this.http.get(weatherUrl).toPromise()
        .then(resolve)
        .catch(() => {
          reject("there was an error processing your request");
        }
        )
    })
  }
}
