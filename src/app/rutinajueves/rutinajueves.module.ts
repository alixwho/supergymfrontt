import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinajuevesPageRoutingModule } from './rutinajueves-routing.module';

import { RutinajuevesPage } from './rutinajueves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinajuevesPageRoutingModule
  ],
  declarations: [RutinajuevesPage]
})
export class RutinajuevesPageModule {}
