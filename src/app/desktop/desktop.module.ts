import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {DesktopRoutingModule} from './desktop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DesktopRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class DesktopModule { }
