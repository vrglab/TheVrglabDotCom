import { TestBed } from '@angular/core/testing';

import { ItchioService } from './itchio.service';

describe('ItchioService', () => {
  let service: ItchioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItchioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
