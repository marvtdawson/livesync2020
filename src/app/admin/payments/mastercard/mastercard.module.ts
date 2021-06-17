import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastercardPageRoutingModule } from './mastercard-routing.module';

import { MastercardPage } from './mastercard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastercardPageRoutingModule
  ],
  declarations: [MastercardPage]
})
export class MastercardPageModule {}
