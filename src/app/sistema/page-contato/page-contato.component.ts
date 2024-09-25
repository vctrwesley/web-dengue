// page-contato.component.ts
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-contato',
  templateUrl: './page-contato.component.html',
  styleUrls: ['./page-contato.component.css'],
})

export class PageContatoComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex: number = 0;
  itemWidth: number = 450;
  cards = [
    {
      nome:'João Victor dos Santos' ,
      funcao: 'Agente de Saúde' ,
      telefone:'123-456-7890',
      email:'JV@zeonoserussas.com' ,
      link_png:'assets/images/cards_Agentes/jv.png'
    },
    {
      nome:'Felipe Nogueira Leite' ,
      funcao: 'Agente de Saúde' ,
      telefone:'123-456-7890',
      email:'Felp@zeonoserussas.com' ,
      link_png:'assets/images/cards_Agentes/fn.png'
    },
    {
      nome:'Denise Amorim Rodrigues' ,
      funcao: 'Agente de Saúde' ,
      telefone:'123-456-7890',
      email:'denise@zeonoserussas.com' ,
      link_png:'assets/images/cards_Agentes/da.png'
    },
    {
      nome:'Marilia Mendes dos Santos' ,
      funcao: 'Agente de Saúde' ,
      telefone:'123-456-7890',
      email:'Marilia@zeonoserussas.com' ,
      link_png:'assets/images/cards_Agentes/mm.png'
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateCarousel();
    //this.startAutoplay();
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
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateCarousel();
  }

  scrollRight() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateCarousel();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  /*startAutoplay() {
    setInterval(() => {
      this.scrollRight();
    }, 8000);
  }*/

  updateCarousel() {
    const carouselElement = this.carousel.nativeElement;
    const itemWidth = carouselElement.querySelector('.carousel-item').clientWidth;
    const containerWidth = carouselElement.offsetWidth;

    // Calcula o deslocamento para centralizar o item ativo
    let offset = (containerWidth / 2) - (itemWidth / 2) - this.currentIndex * (itemWidth);

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
