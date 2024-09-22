import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit, AfterViewInit {
  text: string = 'Combate ao mosquito';
  repeatedText: string[] = [];

  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex: number = 0;
  itemWidth: number = 450;

  items = [
    { title: 'Card 1', image: './assets/images/page-home/card-feedback.png' },
    { title: 'Card 2', image: './assets/images/page-home/card-feedback-02.png' },
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
    this.updateCarousel();
    this.startAutoplay();
    this.adjustItemWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustItemWidth();
    this.updateCarousel();  
  }

  adjustItemWidth() {
    const containerWidth = window.innerWidth;

    // Ajustar a largura do item com base na largura da tela
    if (containerWidth < 768) {
      this.itemWidth = 350;
    } else if (containerWidth < 1024) {
      this.itemWidth = 400;
    } else {
      this.itemWidth = 450;
    }
  }

  scrollLeft() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateCarousel();
  }

  scrollRight() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateCarousel();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  startAutoplay() {
    setInterval(() => {
      this.scrollRight();
    }, 6000);
  }

  updateCarousel() {
    const carouselElement = this.carousel.nativeElement;
    const itemWidth = carouselElement.querySelector('.carousel-item').clientWidth;
    const containerWidth = carouselElement.offsetWidth;

     // Calcula o deslocamento para centralizar o item ativo
     let offset = (containerWidth / 2) - (itemWidth / 2) - this.currentIndex * (itemWidth + 20) + 500;

     // Ajuste para telas menores
     if (window.innerWidth <= 768) { // Tablets e celulares
       offset = (containerWidth / 2) - (itemWidth / 2) - this.currentIndex * (itemWidth + 10) + 350;
     }
 
     carouselElement.style.transform = `translateX(${offset}px)`;

    // Aplica a classe 'active' no item atual para destacá-lo
    const items = carouselElement.querySelectorAll('.carousel-item');
    items.forEach((item: any, index: number) => {
      if (index === this.currentIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

}