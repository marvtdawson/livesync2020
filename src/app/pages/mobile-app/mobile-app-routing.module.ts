import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileAppPage } from './mobile-app.page';

const routes: Routes = [
  {
    path: '',
    component: MobileAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileAppPageRoutingModule {}
