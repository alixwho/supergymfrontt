import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasabadoPageRoutingModule } from './rutinasabado-routing.module';

import { RutinasabadoPage } from './rutinasabado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasabadoPageRoutingModule
  ],
  declarations: [RutinasabadoPage]
})
export class RutinasabadoPageModule {}
