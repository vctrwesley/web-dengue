import { Component } from '@angular/core';

@Component({
  selector: 'app-page-prevencao',
  templateUrl: './page-prevencao.component.html',
  styleUrls: ['./page-prevencao.component.css'],
})
export class PagePrevencaoComponent {
  currentMargin = 0; // margem inicial

  // Defina URLs diretamente no HTML, não é necessário incluir aqui

  slideRight() {
    const slideWidth = 25; // porcentagem do slide
    const maxMargin = -(100 - slideWidth); // margem máxima negativa

    if (this.currentMargin > maxMargin) {
      this.currentMargin -= slideWidth;
    }
  }

  slideLeft() {
    const slideWidth = 25; // porcentagem do slide

    if (this.currentMargin < 0) {
      this.currentMargin += slideWidth;
    }
  }
}
