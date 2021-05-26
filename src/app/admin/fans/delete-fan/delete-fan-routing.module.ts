import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteFanPage } from './delete-fan.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteFanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteFanPageRoutingModule {}
