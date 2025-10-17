import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaviernesPageRoutingModule } from './rutinaviernes-routing.module';

import { RutinaviernesPage } from './rutinaviernes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaviernesPageRoutingModule
  ],
  declarations: [RutinaviernesPage]
})
export class RutinaviernesPageModule {}
