import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallejerPageRoutingModule } from './detallejer-routing.module';

import { DetallejerPage } from './detallejer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallejerPageRoutingModule
  ],
  declarations: [DetallejerPage]
})
export class DetallejerPageModule {}
