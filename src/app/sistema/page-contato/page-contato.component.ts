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
 
  slides = [
    {
      nome: 'João Victor',
      funcao: 'Pedreiro',
      telefone: '40028922',
      email: 'joao@email.com',
      link_png: 'assets/images/cards_Agentes/jv.png'
    },
    {
      nome: 'Maria Silva',
      funcao: 'Agente de Endemias',
      telefone: '999999999',
      email: 'maria@endemias.com',
      link_png: 'assets/images/cards_Agentes/jv.png'
    },
    {
      nome: 'ronalda',
      funcao: 'Agente de Endemias',
      telefone: '999999999',
      email: 'maria@endemias.com',
      link_png: 'assets/images/cards_Agentes/jv.png'
    }
    // Adicione mais cards conforme necessário
  ];

  // Função para ir para o slide anterior
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  // Função para ir para o próximo slide
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
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
