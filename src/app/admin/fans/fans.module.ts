import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FansPageRoutingModule } from './fans-routing.module';

import { FansPage } from './fans.page';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FansPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [FansPage]
})
export class FansPageModule {}
