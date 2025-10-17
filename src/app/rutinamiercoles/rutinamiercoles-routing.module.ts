import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinamiercolesPage } from './rutinamiercoles.page';

const routes: Routes = [
  {
    path: '',
    component: RutinamiercolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinamiercolesPageRoutingModule {}
