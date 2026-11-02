import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {
  private apiUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=19.4326&longitude=-99.1332&maxradiuskm=500';

  constructor(private http: HttpClient) {}

  getEarthquakes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
