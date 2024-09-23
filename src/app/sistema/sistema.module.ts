import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { PagePrevencaoComponent } from './page-prevencao/page-prevencao.component';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { SharedModule } from '../shared/shared.module';
import { PageTermosDeUsoComponent } from './page-termos-de-uso/page-termos-de-uso.component';
import { PagePoliticaDePrivacidadeComponent } from './page-politica-de-privacidade/page-politica-de-privacidade.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    PageSobreComponent,
    PagePrevencaoComponent,
    PageContatoComponent,
    PageTermosDeUsoComponent,
    PagePoliticaDePrivacidadeComponent,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    SharedModule,
    
  ],
})
export class SistemaModule { }
