import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutPage } from './site-layout.page';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteLayoutPageRoutingModule {}
