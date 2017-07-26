import { TestBed, inject } from '@angular/core/testing';

import { MyCinemaServiceService } from './my-cinema-service.service';

describe('MyCinemaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCinemaServiceService]
    });
  });

  it('should be created', inject([MyCinemaServiceService], (service: MyCinemaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
