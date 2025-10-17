import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinamartesPage } from './rutinamartes.page';

const routes: Routes = [
  {
    path: '',
    component: RutinamartesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinamartesPageRoutingModule {}
