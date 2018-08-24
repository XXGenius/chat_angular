import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MobileRoutingModule} from './mobile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MobileRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class MobileModule { }
