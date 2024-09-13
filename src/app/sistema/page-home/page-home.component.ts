import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  text: string = 'Combate ao mosquito';
  repeatedText: string[] = [];

  constructor() {
    this.repeatText(15); // Repetir o suficiente para preencher a tela
  }

  repeatText(times: number) {
    for (let i = 0; i < times; i++) {
      this.repeatedText.push(this.text);
    }
  }
}