import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent {
  @Input() nome: string = '';
  @Input() funcao: string = '';
  @Input() telefone: string = '';
  @Input() email: string = '';

  @Input() link_png: string = '';
}
