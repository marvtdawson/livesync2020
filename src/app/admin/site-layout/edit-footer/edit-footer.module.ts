import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFooterPageRoutingModule } from './edit-footer-routing.module';

import { EditFooterPage } from './edit-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFooterPageRoutingModule
  ],
  declarations: [EditFooterPage]
})
export class EditFooterPageModule {}
