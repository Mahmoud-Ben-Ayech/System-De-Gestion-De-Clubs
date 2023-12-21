import { TestBed } from '@angular/core/testing';

import { ResponsableclubService } from './responsableclub.service';

describe('ResponsableclubService', () => {
  let service: ResponsableclubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableclubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
