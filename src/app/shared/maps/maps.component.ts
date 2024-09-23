import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css',
})
export class MapsComponent implements OnInit {
  googleMapsLoaded = false;
  center: google.maps.LatLngLiteral = { lat: -5.4984, lng: -39.3206 };
  zoom = 7;
  width = '100%';
  height = '100%';
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 7,
  };

  constructor() {}

  ngOnInit(): void {
    this.loadGoogleMapsScript()
      .then(() => {
        this.googleMapsLoaded = true;
        this.initializeMap();
      })
      .catch((error) => {
        console.error('Error loading Google Maps script:', error);
      });
  }

  loadGoogleMapsScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof google !== 'undefined' && google.maps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.GOOGLE_MAPS_API_KEY}&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  }

  markers: any[] = [
    {
      position: { lat: -3.71722, lng: -38.54337 },
      label: { color: 'blue', text: 'Fortaleza' },
      title: 'Fortaleza',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -4.97806, lng: -39.05611 },
      label: { color: 'blue', text: 'Quixadá' },
      title: 'Quixadá',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.4653, lng: -39.0598 },
      label: { color: 'blue', text: 'Caucaia' },
      title: 'Caucaia',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.71839, lng: -38.5434 },
      label: { color: 'blue', text: 'Aquiraz' },
      title: 'Aquiraz',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.90139, lng: -38.3917 },
      label: { color: 'blue', text: 'Maracanaú' },
      title: 'Maracanaú',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.68833, lng: -38.6531 },
      label: { color: 'blue', text: 'Maranguape' },
      title: 'Maranguape',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.56694, lng: -39.2903 },
      label: { color: 'blue', text: 'Pacatuba' },
      title: 'Pacatuba',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.75583, lng: -38.6256 },
      label: { color: 'blue', text: 'Horizonte' },
      title: 'Horizonte',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.71556, lng: -38.5431 },
      label: { color: 'blue', text: 'Eusébio' },
      title: 'Eusébio',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.9225, lng: -38.3908 },
      label: { color: 'blue', text: 'Pacajus' },
      title: 'Pacajus',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
    {
      position: { lat: -3.67472, lng: -38.6531 },
      label: { color: 'blue', text: 'Pacatuba' },
      title: 'Pacatuba',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    },
  ];

  initializeMap(): void {}
}
