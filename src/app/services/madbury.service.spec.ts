import { TestBed } from '@angular/core/testing';

import { MadburyService } from './madbury.service';

describe('MadburyService', () => {
  let service: MadburyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadburyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
