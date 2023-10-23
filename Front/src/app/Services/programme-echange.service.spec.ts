import { TestBed } from '@angular/core/testing';

import { ProgrammeEchangeService } from './programme-echange.service';

describe('ProgrammeEchangeService', () => {
  let service: ProgrammeEchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammeEchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
