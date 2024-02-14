import { TestBed } from '@angular/core/testing';

import { SubmitButtonService } from './submit-button.service';

describe('SubmitButtonService', () => {
  let service: SubmitButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
