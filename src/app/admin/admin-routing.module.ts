import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
// import {PaymentsPage} from "./payments/payments.page";

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
        // component: PaymentsPage,
        loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule),
        children: [
          {
            path: 'mastercard',
            loadChildren: () => import('../admin/payments/mastercard/mastercard.module').then( m => m.MastercardPageModule)
          },
          {
            path: 'visa',
            loadChildren: () => import('../admin/payments/visa/visa.module').then( m => m.VisaPageModule)
          },
          {
            path: 'stripe',
            loadChildren: () => import('../admin/payments/stripe/stripe.module').then( m => m.StripePageModule)
          },
          {
            path: 'pay-pal',
            loadChildren: () => import('../admin/payments/pay-pal/pay-pal.module').then( m => m.PayPalPageModule)
          },
          {
            path: 'apple-pay',
            loadChildren: () => import('../admin/payments/apple-pay/apple-pay.module').then( m => m.ApplePayPageModule)
          },
          {
            path: 'google-pay',
            loadChildren: () => import('../admin/payments/google-pay/google-pay.module').then( m => m.GooglePayPageModule)
          }
        ]
      },
      {
        path: 'performances',
        loadChildren: () => import('./performances/performances.module').then( m => m.PerformancesPageModule)
      },
      {
        path: 'site-pages',
        loadChildren: () => import('./site/site.module').then( m => m.SitePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
