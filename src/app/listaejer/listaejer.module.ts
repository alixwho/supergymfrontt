import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaejerPageRoutingModule } from './listaejer-routing.module';

import { ListaejerPage } from './listaejer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaejerPageRoutingModule
  ],
  declarations: [ListaejerPage]
})
export class ListaejerPageModule {}
