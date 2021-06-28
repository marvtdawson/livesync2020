import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {TabsComponentRoutingModule} from './tabs-routing.module';
// import {TabsComponent} from './tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsComponentRoutingModule
  ],
  exports: [],
  declarations: []
})
export class TabsComponentModule {}
