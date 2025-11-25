import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaejerPage } from './listaejer.page';

const routes: Routes = [
  {
    path: '',
    component: ListaejerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaejerPageRoutingModule {}
