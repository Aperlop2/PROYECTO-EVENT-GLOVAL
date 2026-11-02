// src/app/views/pages/perfil/eventos-destacados/eventos-destacados.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { EarthquakeService } from 'src/app/services/earthquake.service';
import { WeatherService } from 'src/app/services/weather.service';
import { OpenAiService } from 'src/app/services/openai.service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-eventos-destacados',
  templateUrl: './eventos-destacados.component.html',
  styleUrls: ['./eventos-destacados.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, GoogleMapsModule, DatePipe, MatCardModule]
})
export class EventosDestacadosComponent implements OnInit {
  earthquakeData: any;
  weatherData: any;
  recommendations: any;
  center: google.maps.LatLngLiteral = { lat: 19.4326, lng: -99.1332 };
  zoom = 6;
  markers: any[] = [];
  selectedEvent: any;

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  constructor(
    private earthquakeService: EarthquakeService,
    private weatherService: WeatherService,
    private openAiService: OpenAiService
  ) {}

  ngOnInit(): void {
    this.earthquakeService.getEarthquakes().subscribe((data: any) => {
      this.earthquakeData = data.features;
      this.markers = this.earthquakeData.map((event: any) => ({
        position: {
          lat: event.geometry.coordinates[1],
          lng: event.geometry.coordinates[0]
        },
        label: {
          color: 'red',
          text: `M ${event.properties.mag}`
        },
        title: `Terremoto M ${event.properties.mag}`,
        info: event.properties.place,
        options: {
          animation: google.maps.Animation.DROP,
        },
        event: event
      }));
    });

    this.weatherService.getWeatherForecast('Mexico', 3).subscribe((data: any) => {
      this.weatherData = data;
    });
  }

  openInfo(marker: MapMarker, event: any) {
    this.selectedEvent = event;
    this.infoWindow.open(marker);
  }

  getRecommendations() {
    const prompt = `Proporcioname recomendaciones para el evento natural ${this.selectedEvent.properties.mag} in ${this.selectedEvent.properties.place}.`;
    this.openAiService.getRecommendations(prompt).subscribe(
      (response: any) => {
        this.recommendations = response.choices[0].message.content;
      },
      (error: any) => {
        console.error('Error fetching recommendations:', error);
      }
    );
  }
}
