import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteSetPageRoutingModule } from './delete-set-routing.module';

import { DeleteSetPage } from './delete-set.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteSetPageRoutingModule
  ],
  declarations: [DeleteSetPage]
})
export class DeleteSetPageModule {}
