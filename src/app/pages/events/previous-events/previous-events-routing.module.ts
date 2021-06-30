import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviousEventsPage } from './previous-events.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousEventsPageRoutingModule {}
