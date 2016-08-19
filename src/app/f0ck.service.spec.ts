/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { F0ckService } from './f0ck.service';

describe('Service: F0ck', () => {
  beforeEach(() => {
    addProviders([F0ckService]);
  });

  it('should ...',
    inject([F0ckService],
      (service: F0ckService) => {
        expect(service).toBeTruthy();
      }));
});
