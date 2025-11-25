import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminarejerPage } from './terminarejer.page';

const routes: Routes = [
  {
    path: '',
    component: TerminarejerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminarejerPageRoutingModule {}
