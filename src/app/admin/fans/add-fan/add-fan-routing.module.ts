import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFanPage } from './add-fan.page';

const routes: Routes = [
  {
    path: '',
    component: AddFanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFanPageRoutingModule {}
