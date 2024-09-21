import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { MapsComponent } from './maps/maps.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [
    HeaderComponent,
    CardsComponent,
    MapsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
