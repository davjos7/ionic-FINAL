import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarcursoPage } from './registrarcurso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarcursoPageRoutingModule {}
