import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinamiercolesPageRoutingModule } from './rutinamiercoles-routing.module';

import { RutinamiercolesPage } from './rutinamiercoles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinamiercolesPageRoutingModule
  ],
  declarations: [RutinamiercolesPage]
})
export class RutinamiercolesPageModule {}
