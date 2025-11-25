import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminodediaPage } from './terminodedia.page';

const routes: Routes = [
  {
    path: '',
    component: TerminodediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminodediaPageRoutingModule {}
