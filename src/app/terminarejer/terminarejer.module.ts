import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminarejerPageRoutingModule } from './terminarejer-routing.module';

import { TerminarejerPage } from './terminarejer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminarejerPageRoutingModule
  ],
  declarations: [TerminarejerPage]
})
export class TerminarejerPageModule {}
