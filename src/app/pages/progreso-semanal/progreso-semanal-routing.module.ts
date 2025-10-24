import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresoSemanalPage } from './progreso-semanal.page';

const routes: Routes = [
  {
    path: '',
    component: ProgresoSemanalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgresoSemanalPageRoutingModule {}
