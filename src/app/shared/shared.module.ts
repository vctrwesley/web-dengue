import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { MapsComponent } from './maps/maps.component';
import { CardDepoimentosComponent } from './card-depoimentos/card-depoimentos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent,
    MapsComponent,
    CardDepoimentosComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    HeaderComponent,
    CardsComponent,
    MapsComponent,
    CardDepoimentosComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
