import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceGuardService } from './device-guard.service';

const routes: Routes = [
  {
    path: 'm',
    loadChildren: './mobile/mobile.module#MobileModule',
    canLoad: [DeviceGuardService]
  },
  {
    path: '',
    loadChildren: './desktop/desktop.module#DesktopModule',
    canLoad: [DeviceGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
