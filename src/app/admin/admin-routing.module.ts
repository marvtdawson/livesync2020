import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'fans',
        loadChildren: () => import('./fans/fans.module').then( m => m.FansPageModule)
      },
      {
        path: 'sets',
        loadChildren: () => import('./sets/sets.module').then( m => m.SetsPageModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
      },
      {
        path: 'performances',
        loadChildren: () => import('./performances/performances.module').then( m => m.PerformancesPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
