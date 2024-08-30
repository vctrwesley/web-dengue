import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { PagePrevencaoComponent } from './page-prevencao/page-prevencao.component';
import { PageContatoComponent } from './page-contato/page-contato.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    PageSobreComponent,
    PagePrevencaoComponent,
    PageContatoComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
  ],
})
export class SistemaModule { }
