import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinadomingoPage } from './rutinadomingo.page';

const routes: Routes = [
  {
    path: '',
    component: RutinadomingoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinadomingoPageRoutingModule {}
