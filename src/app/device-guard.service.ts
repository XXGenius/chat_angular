import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class DeviceGuardService {
  constructor(private deviceService: DeviceDetectorService) {}

  canLoad(): boolean {
    const url = window.location.href.replace(window.location.origin, '');

    const urlArray = url.split('/');
    const urlWithMBool = urlArray.length > 1 && urlArray[1] === 'm';

    let urlWithOutM = '';
    let urlWithM = '';
    if (urlWithMBool) {
      urlWithOutM = url.slice(2);
      urlWithM = url;
    } else {
      urlWithOutM = url;
      urlWithM = '/m' + (url === '/' ? '' : url);
    }

    if (this.deviceService.isDesktop()) {
      if (urlWithMBool) {
        window.location.href = urlWithOutM;
        return false;
      } else {
        return true;
      }
    } else {
      if (!urlWithMBool) {
        window.location.href = urlWithM;
        return false;
      } else {
        return true;
      }
    }
  }
}
