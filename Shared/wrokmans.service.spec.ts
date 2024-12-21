import { TestBed } from '@angular/core/testing';

import { WrokmansService } from './wrokmans.service';

describe('WrokmansService', () => {
  let service: WrokmansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrokmansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
