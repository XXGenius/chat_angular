import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {DesktopRoutingModule} from './desktop-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesktopRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class DesktopModule { }
