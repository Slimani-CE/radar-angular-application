import { TestBed } from '@angular/core/testing';

import { RadarServiceService } from './radar-service.service';

describe('RadarServiceService', () => {
  let service: RadarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
