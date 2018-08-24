import { TestBed, inject } from '@angular/core/testing';

import { DeviceGuardService } from './device-guard.service';

describe('DeviceGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceGuardService]
    });
  });

  it(
    'should be created',
    inject([DeviceGuardService], (service: DeviceGuardService) => {
      expect(service).toBeTruthy();
    })
  );
});
