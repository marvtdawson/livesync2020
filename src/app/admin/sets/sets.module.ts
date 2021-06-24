import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetsPageRoutingModule } from './sets-routing.module';

import { SetsPage } from './sets.page';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SetsPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [SetsPage]
})
export class SetsPageModule {}
