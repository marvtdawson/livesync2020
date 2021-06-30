import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditHeaderPage } from './edit-header.page';

const routes: Routes = [
  {
    path: '',
    component: EditHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditHeaderPageRoutingModule {}
