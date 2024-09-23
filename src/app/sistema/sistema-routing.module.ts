import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { PagePrevencaoComponent } from './page-prevencao/page-prevencao.component';
import { PageContatoComponent } from './page-contato/page-contato.component';
import { PageTermosDeUsoComponent } from './page-termos-de-uso/page-termos-de-uso.component';
import { PagePoliticaDePrivacidadeComponent } from './page-politica-de-privacidade/page-politica-de-privacidade.component';

const routes: Routes = [
    {
      path: 'usuario',
      component: LayoutComponent,
      children: [
        { path: 'page-home', component: PageHomeComponent },
        { path: 'page-sobre', component: PageSobreComponent },
        { path: 'page-prevencao', component: PagePrevencaoComponent },
        { path: 'page-contato', component: PageContatoComponent },
        { path: 'page-termos-de-uso', component: PageTermosDeUsoComponent },
        { path: 'page-politica-de-privacidade', component: PagePoliticaDePrivacidadeComponent },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SistemaRoutingModule {}