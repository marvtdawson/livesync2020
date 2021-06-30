import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
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
        loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule),
        children: [
          {
            path: 'new-events',
            loadChildren: () => import('../events/new-events/new-events.module').then( m => m.NewEventsPageModule)
          },
          {
            path: 'previous-events',
            loadChildren: () => import('../events/previous-events/previous-events.module').then( m => m.PreviousEventsPageModule)
          }
        ]
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
        path: 'forgot-password',
        loadChildren: () => import('../forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
      },
      {
        path: 'subscribe',
        loadChildren: () => import('../subscribe/subscribe.module').then( m => m.SubscribePageModule)
      },
      {
        path: 'privacy',
        loadChildren: () => import('../privacy/privacy.module').then( m => m.PrivacyPageModule)
      },
      {
        path: 'terms-conditions',
        loadChildren: () => import('../terms-of-service/terms-of-service.module').then( m => m.TermsOfServicePageModule)
      },
      {
        path: 'mobile-app',
        loadChildren: () => import('../mobile-app/mobile-app.module').then( m => m.MobileAppPageModule)
      },
      {
        path: 'sitemap',
        loadChildren: () => import('../sitemap/sitemap.module').then( m => m.SitemapPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('../logout/logout.module').then( m => m.LogoutPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../../admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
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
