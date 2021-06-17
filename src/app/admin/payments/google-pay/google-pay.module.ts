import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GooglePayPageRoutingModule } from './google-pay-routing.module';

import { GooglePayPage } from './google-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePayPageRoutingModule
  ],
  declarations: [GooglePayPage]
})
export class GooglePayPageModule {}
