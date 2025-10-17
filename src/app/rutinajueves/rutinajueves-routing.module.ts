import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinajuevesPage } from './rutinajueves.page';

const routes: Routes = [
  {
    path: '',
    component: RutinajuevesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinajuevesPageRoutingModule {}
