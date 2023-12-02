import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarcursoPageRoutingModule } from './registrarcurso-routing.module';

import { RegistrarcursoPage } from './registrarcurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarcursoPageRoutingModule
  ],
  declarations: [RegistrarcursoPage]
})
export class RegistrarcursoPageModule {}
