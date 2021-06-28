import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'performances',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/performances/performances.module').then(m => m.PerformancesPageModule)
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/events/events.module').then(m => m.EventsPageModule)
          }
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: '',
            loadChildren: () => import('../../admin/admin.module').then(m => m.AdminPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/menu/events',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsComponentRoutingModule {}
