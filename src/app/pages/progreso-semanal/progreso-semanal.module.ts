import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresoSemanalPageRoutingModule } from './progreso-semanal-routing.module';

import { ProgresoSemanalPage } from './progreso-semanal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresoSemanalPageRoutingModule
  ],
  declarations: [ProgresoSemanalPage]
})
export class ProgresoSemanalPageModule {}
