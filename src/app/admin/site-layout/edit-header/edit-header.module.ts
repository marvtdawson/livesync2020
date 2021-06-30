import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHeaderPageRoutingModule } from './edit-header-routing.module';

import { EditHeaderPage } from './edit-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditHeaderPageRoutingModule
  ],
  declarations: [EditHeaderPage]
})
export class EditHeaderPageModule {}
