import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TemplateModule } from './template/template.module';
import { SistemaModule } from './sistema/sistema.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    SistemaModule,
    SharedModule,
    //GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
