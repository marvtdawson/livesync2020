import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import {LayoutModule} from "../layout/layout.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdminPageRoutingModule,
        LayoutModule
    ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
