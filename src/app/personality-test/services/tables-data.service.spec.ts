import { TestBed } from '@angular/core/testing';

import { TablesDataService } from './tables-data.service';

describe('TablesDataService', () => {
  let service: TablesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
