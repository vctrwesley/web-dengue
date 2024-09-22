import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  text: string = 'Combate ao mosquito';
  repeatedText: string[] = [];

  @ViewChild('carousel') carousel!: ElementRef;

  items = [
    { title: 'Card 1', image: './assets/images/page-home/card-feedback.png' },
    { title: 'Card 2', image: './assets/images/page-home/card-feedback.png' },
    { title: 'Card 3', image: './assets/images/page-home/card-feedback.png' },
    { title: 'Card 4', image: './assets/images/page-home/card-feedback.png' },
    { title: 'Card 5', image: './assets/images/page-home/card-feedback.png' },
    { title: 'Card 6', image: './assets/images/page-home/card-feedback.png' },
  ];

  constructor() {
    this.repeatText(15); // Repetir o suficiente para preencher a tela
  }

  repeatText(times: number) {
    for (let i = 0; i < times; i++) {
      this.repeatedText.push(this.text);
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.startAutoplay();
  }
  
  // Funções de rolagem
  scrollLeft(carousel: HTMLElement) {
    carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
  }

  scrollRight(carousel: HTMLElement) {
    carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
  }

  startAutoplay() {
    const carouselElement = this.carousel.nativeElement;
    setInterval(() => {
      this.scrollRight(carouselElement);
    }, 3000); // Ajuste o intervalo conforme necessário
  }
  
}