import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FansPage } from './fans.page';

const routes: Routes = [
  {
    path: '',
    component: FansPage
  },
  {
    path: 'add-fan',
    loadChildren: () => import('./add-fan/add-fan.module').then( m => m.AddFanPageModule)
  },
  {
    path: 'delete-fan',
    loadChildren: () => import('./delete-fan/delete-fan.module').then( m => m.DeleteFanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FansPageRoutingModule {}
