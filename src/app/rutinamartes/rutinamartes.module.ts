import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinamartesPageRoutingModule } from './rutinamartes-routing.module';

import { RutinamartesPage } from './rutinamartes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinamartesPageRoutingModule
  ],
  declarations: [RutinamartesPage]
})
export class RutinamartesPageModule {}
