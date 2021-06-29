import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileAppPageRoutingModule } from './mobile-app-routing.module';

import { MobileAppPage } from './mobile-app.page';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MobileAppPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [MobileAppPage]
})
export class MobileAppPageModule {}
