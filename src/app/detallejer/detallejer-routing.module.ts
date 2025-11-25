import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallejerPage } from './detallejer.page';

const routes: Routes = [
  {
    path: '',
    component: DetallejerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallejerPageRoutingModule {}
