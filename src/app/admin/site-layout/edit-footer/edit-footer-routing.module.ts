import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFooterPage } from './edit-footer.page';

const routes: Routes = [
  {
    path: '',
    component: EditFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFooterPageRoutingModule {}
