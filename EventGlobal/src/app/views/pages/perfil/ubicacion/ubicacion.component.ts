import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
  standalone: true,
  imports: [GoogleMapsModule]
})
export class UbicacionComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  zoom = 15;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap'
  };
  markerLabel: string = 'Tu ubicación'; // Define aquí tu etiqueta

  constructor() {}

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(`Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error obteniendo la ubicación: ', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      console.error('Geolocalización no es soportada por este navegador.');
    }
  }
}
