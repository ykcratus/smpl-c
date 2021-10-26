import { TestBed } from '@angular/core/testing';

import { SmplcService } from './smplc.service';

describe('SmplcService', () => {
  let service: SmplcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmplcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
