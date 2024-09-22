import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.css'
})
export class CardDepoimentosComponent {
  @Input() depoimento!: string;
  @Input() img!: string;
  @Input() nome!: string;
  @Input() idade!: string;
  @Input() cidade!: string;

}
