import { TestBed, inject } from '@angular/core/testing';

import { ReferenceDataServiceService } from './reference-data-service.service';

describe('ReferenceDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceDataServiceService]
    });
  });

  it('should be created', inject([ReferenceDataServiceService], (service: ReferenceDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
