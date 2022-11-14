import { TestBed } from '@angular/core/testing';

import { GetapiPersonasService } from './getapi-personas.service';

describe('GetapiPersonasService', () => {
  let service: GetapiPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetapiPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
