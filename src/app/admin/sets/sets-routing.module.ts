import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetsPage } from './sets.page';

const routes: Routes = [
  {
    path: '',
    component: SetsPage
  },
  {
    path: 'create-set',
    loadChildren: () => import('./create-set/create-set.module').then( m => m.CreateSetPageModule)
  },
  {
    path: 'delete-set',
    loadChildren: () => import('./delete-set/delete-set.module').then( m => m.DeleteSetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetsPageRoutingModule {}
