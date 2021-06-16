import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./layout/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./layout/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./layout/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./layout/header/header.module').then( m => m.HeaderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
