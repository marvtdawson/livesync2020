import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {ExpandableComponent} from "./expandable/expandable.component";



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ExpandableComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, ExpandableComponent]
})
export class SharedComponentsModule { }
