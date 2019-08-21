import { TestBed } from '@angular/core/testing';

import { HardCodeAuthService } from './hard-code-auth.service';

describe('HardCodeAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodeAuthService = TestBed.get(HardCodeAuthService);
    expect(service).toBeTruthy();
  });
});
