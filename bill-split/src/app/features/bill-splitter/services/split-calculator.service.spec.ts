import { TestBed } from '@angular/core/testing';

import { SplitCalculatorService } from './split-calculator.service';

describe('SplitCalculatorService', () => {
  let service: SplitCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
