import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinadomingoPageRoutingModule } from './rutinadomingo-routing.module';

import { RutinadomingoPage } from './rutinadomingo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinadomingoPageRoutingModule
  ],
  declarations: [RutinadomingoPage]
})
export class RutinadomingoPageModule {}
