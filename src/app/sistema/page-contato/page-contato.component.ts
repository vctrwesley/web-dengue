// page-contato.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contato',
  templateUrl: './page-contato.component.html',
  styleUrls: ['./page-contato.component.css'],
})
export class PageContatoComponent {
  // Carrossel
  slides = [
    { image: 'assets/images/cards_Agentes/felipe.png' },
    { image: 'assets/images/cards_Agentes/felipe.png' },
    { image: 'assets/images/cards_Agentes/felipe.png' },
    // Adicione mais slides conforme necessário
  ];

  currentIndex = 0;

  prevSlide() {
    const totalSlides = this.slides.length;
    this.currentIndex = (this.currentIndex - 1 + totalSlides) % totalSlides;
    this.updatecarrosel();
  }

  nextSlide() {
    const totalSlides = this.slides.length;
    this.currentIndex = (this.currentIndex + 1) % totalSlides;
    this.updatecarrosel();
  }

  updatecarrosel() {
    const carrosel = document.querySelector('.carrosel') as HTMLElement;
    carrosel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  // Google Maps
  center: google.maps.LatLngLiteral = { lat: -23.5505, lng: -46.6333 }; // Exemplo de coordenadas
  zoom = 12;
  markers = [
    {
      position: {
        lat: -23.5505,
        lng: -46.6333,
      },
    },
  ];
}
