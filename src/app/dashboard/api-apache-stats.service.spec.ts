import { TestBed } from '@angular/core/testing';

import { ApiApacheStatsService } from './api-apache-stats.service';

describe('ApiApacheStatsService', () => {
  let service: ApiApacheStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiApacheStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
