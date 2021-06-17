import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsPage } from './payments.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsPage
  },
  {
    path: 'mastercard',
    loadChildren: () => import('./mastercard/mastercard.module').then( m => m.MastercardPageModule)
  },
  {
    path: 'visa',
    loadChildren: () => import('./visa/visa.module').then( m => m.VisaPageModule)
  },
  {
    path: 'stripe',
    loadChildren: () => import('./stripe/stripe.module').then( m => m.StripePageModule)
  },
  {
    path: 'pay-pal',
    loadChildren: () => import('./pay-pal/pay-pal.module').then( m => m.PayPalPageModule)
  },
  {
    path: 'apple-pay',
    loadChildren: () => import('./apple-pay/apple-pay.module').then( m => m.ApplePayPageModule)
  },
  {
    path: 'google-pay',
    loadChildren: () => import('./google-pay/google-pay.module').then( m => m.GooglePayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsPageRoutingModule {}
