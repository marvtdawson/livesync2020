import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancesPageRoutingModule } from './performances-routing.module';

import { PerformancesPage } from './performances.page';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PerformancesPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [PerformancesPage]
})
export class PerformancesPageModule {}
