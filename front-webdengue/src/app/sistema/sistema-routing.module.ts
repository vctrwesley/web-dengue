import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { PagePrevencaoComponent } from './page-prevencao/page-prevencao.component';
import { PageContatoComponent } from './page-contato/page-contato.component';

const routes: Routes = [
    {
      path: 'usuario',
      component: LayoutComponent,
      children: [
        { path: 'page-home', component: PageHomeComponent },
        { path: 'page-sobre', component: PageSobreComponent },
        { path: 'page-intervencao', component: PagePrevencaoComponent },
        { path: 'page-contato', component: PageContatoComponent },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SistemaRoutingModule {}