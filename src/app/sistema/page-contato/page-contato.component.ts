// page-contato.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-contato',
  templateUrl: './page-contato.component.html',
  styleUrls: ['./page-contato.component.css'],
})
export class PageContatoComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}
  
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

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
