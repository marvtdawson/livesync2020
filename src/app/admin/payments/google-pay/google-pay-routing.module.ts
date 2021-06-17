import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglePayPage } from './google-pay.page';

const routes: Routes = [
  {
    path: '',
    component: GooglePayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GooglePayPageRoutingModule {}
