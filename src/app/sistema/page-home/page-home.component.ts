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

  depoimentos = [
    {
      depoimento: 'Já tive dengue duas vezes e não desejo isso a ninguém. As dores são intensas e a febre é debilitante. Desde então, fico atento a qualquer acúmulo de água e participo de campanhas de conscientização aqui na minha cidade.',
      img: '/assets/images/page-home/photo-perfil.png',
      nome: 'Raiumundo',
      idade: '58 anos',
      cidade: 'Juazeiro do Norte, CE'
    },
    {
      depoimento: 'Eu achava que a dengue era algo distante até meu filho de 10 anos contrair a doença. Foram dias de muita preocupação e sofrimento. Agora, faço questão de verificar tudo em casa e ensinar meus vizinhos sobre os riscos de deixar água parada.',
      img: '/assets/images/page-home/photo-perfil.png',
      nome: 'João Pedro',
      idade: '39 anos',
      cidade: 'Sobral, CE'
    },
    {
      depoimento: 'Sou agente de saúde em Quixadá e vejo de perto como a dengue afeta nossa população. Estamos sempre nas ruas, orientando e ajudando a eliminar focos do mosquito. Mas precisamos que cada morador faça sua parte para manter nossas comunidades seguras.',
      img: '/assets/images/page-home/photo-perfil.png',
      nome: 'Luciana',
      idade: '34 anos',
      cidade: 'Quixadá, CE'
    },
    {
      depoimento: 'A dengue é um problema sério no Ceará, especialmente nas áreas mais urbanas. Como enfermeira, vejo muitos casos graves que poderiam ser evitados com medidas simples de prevenção. Todos precisam se conscientizar e agir!',
      img: '/assets/images/page-home/photo-perfil.png',
      nome: 'Fernanda',
      idade: '42 anos',
      cidade: 'Crato, CE'
    },
    {
      depoimento: 'Quando a dengue apareceu na minha rua, não esperávamos que se espalhasse tão rápido. Vizinhos ficaram doentes e a preocupação aumentou. Desde então, todos nos unimos para eliminar focos do mosquito, e a nossa comunidade ficou mais vigilante e unida para enfrentar esse problema.',
      img: '/assets/images/page-home/photo-perfil.png',
      nome: 'Maria José',
      idade: '47 anos',
      cidade: 'Fortaleza, CE'
    },
    {
      depoimento: 'Eu trabalho em uma escola pública e sempre reforço com meus alunos a importância de combater o mosquito. Eles levam essa mensagem para casa e, assim, toda a comunidade fica mais protegida. A dengue é perigosa e a educação é nossa melhor arma contra ela.',
      img: '/assets/images/page-home/photo-perfil.png',
      nome: 'Carlos',
      idade: '37 anos',
      cidade: 'Maracanaú, CE'
    },
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
    this.currentIndex = (this.currentIndex - 1 + this.depoimentos.length) % this.depoimentos.length;
    this.updateCarousel();
  }

  scrollRight() {
    this.currentIndex = (this.currentIndex + 1) % this.depoimentos.length;
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
    let offset = (containerWidth / 2) - (itemWidth / 2) - this.currentIndex * (itemWidth + 20) + 470;

    // Ajuste para telas menores
    if (window.innerWidth <= 768) { // Tablets e celulares
      offset = (containerWidth / 2) - (itemWidth / 2) - this.currentIndex * (itemWidth + 10);
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