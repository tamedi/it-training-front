import { TestBed } from '@angular/core/testing';

import { ApprenantHttpService } from './apprenant-http.service';

describe('ApprenantHttpService', () => {
  let service: ApprenantHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprenantHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
