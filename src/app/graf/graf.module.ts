import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrafPageRoutingModule } from './graf-routing.module';

import { GrafPage } from './graf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrafPageRoutingModule
  ],
  declarations: [GrafPage]
})
export class GrafPageModule {}
