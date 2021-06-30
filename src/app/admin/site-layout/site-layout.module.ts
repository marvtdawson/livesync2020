import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteLayoutPageRoutingModule } from './site-layout-routing.module';

import { SiteLayoutPage } from './site-layout.page';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SiteLayoutPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [SiteLayoutPage]
})
export class SiteLayoutPageModule {}
