import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './common/services/api.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {DeviceGuardService} from './device-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
  ],
  providers: [DeviceGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
