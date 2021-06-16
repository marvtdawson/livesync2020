import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'features',
        loadChildren: () => import('../features/features.module').then( m => m.FeaturesPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'performances',
        loadChildren: () => import('../performances/performances.module').then( m => m.PerformancesPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('../pricing/pricing.module').then( m => m.PricingPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'log-out',
        loadChildren: () => import('../logout/logout.module').then( m => m.LogoutPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../../admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'page-not-found',
        loadChildren: () => import('../page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
      },
      {
        path: '**',
        loadChildren: () => import('../page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
