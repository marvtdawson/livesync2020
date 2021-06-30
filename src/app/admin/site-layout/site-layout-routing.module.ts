import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutPage } from './site-layout.page';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutPage
  },
  {
    path: 'edit-header',
    loadChildren: () => import('./edit-header/edit-header.module').then( m => m.EditHeaderPageModule)
  },
  {
    path: 'edit-footer',
    loadChildren: () => import('./edit-footer/edit-footer.module').then( m => m.EditFooterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteLayoutPageRoutingModule {}
