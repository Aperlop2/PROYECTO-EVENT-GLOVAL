import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getUbicacion(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocalización no es soportada por este navegador.'));
      }
    });
  }

  watchUbicacion(successCallback: PositionCallback, errorCallback?: PositionErrorCallback): number {
    if (navigator.geolocation) {
      return navigator.geolocation.watchPosition(successCallback, errorCallback);
    } else {
      throw new Error('Geolocalización no es soportada por este navegador.');
    }
  }

  clearWatch(watchId: number) {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
  }
}
