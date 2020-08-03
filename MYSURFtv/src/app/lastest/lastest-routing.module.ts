import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastestPage } from './lastest.page';

const routes: Routes = [
  {
    path: '',
    component: LastestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastestPageRoutingModule {}
