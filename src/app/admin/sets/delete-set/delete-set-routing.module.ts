import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteSetPage } from './delete-set.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteSetPageRoutingModule {}
