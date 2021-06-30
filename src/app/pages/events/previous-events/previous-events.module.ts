import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousEventsPageRoutingModule } from './previous-events-routing.module';

import { PreviousEventsPage } from './previous-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousEventsPageRoutingModule
  ],
  declarations: [PreviousEventsPage]
})
export class PreviousEventsPageModule {}
