import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasabadoPage } from './rutinasabado.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasabadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasabadoPageRoutingModule {}
