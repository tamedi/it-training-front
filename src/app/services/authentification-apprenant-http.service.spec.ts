import { TestBed } from '@angular/core/testing';

import { AuthentificationApprenantHttpService } from './authentification-apprenant-http.service';

describe('AuthentificationApprenantHttpService', () => {
  let service: AuthentificationApprenantHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationApprenantHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
