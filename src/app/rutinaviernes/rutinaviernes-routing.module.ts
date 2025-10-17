import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaviernesPage } from './rutinaviernes.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaviernesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaviernesPageRoutingModule {}
