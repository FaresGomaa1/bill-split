import { TestBed } from '@angular/core/testing';

import { BillStateService } from './bill-state.service';

describe('BillStateService', () => {
  let service: BillStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
