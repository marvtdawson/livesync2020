import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderPage} from "./header/header.page";
import {FooterPage} from "./footer/footer.page";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [HeaderPage, FooterPage],
  imports: [
    CommonModule,
      IonicModule,
      RouterModule
  ],
  exports: [HeaderPage, FooterPage]
})
export class LayoutModule { }
