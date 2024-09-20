import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardsComponent
  ]
})
export class SharedModule { }
