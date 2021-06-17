import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastercardPage } from './mastercard.page';

const routes: Routes = [
  {
    path: '',
    component: MastercardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastercardPageRoutingModule {}
