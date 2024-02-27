import { TestBed } from '@angular/core/testing';

import { MaxOfNumService } from './max-of-num.service';

describe('MaxOfNumService', () => {
  let service: MaxOfNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaxOfNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
