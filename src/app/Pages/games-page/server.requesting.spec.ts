import { TestBed } from '@angular/core/testing';

import { ServerRequestingService } from './server.requesting.service';

describe('ServerRequesting', () => {
  let service: ServerRequestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerRequestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
