import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFanPageRoutingModule } from './add-fan-routing.module';

import { AddFanPage } from './add-fan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFanPageRoutingModule
  ],
  declarations: [AddFanPage]
})
export class AddFanPageModule {}
