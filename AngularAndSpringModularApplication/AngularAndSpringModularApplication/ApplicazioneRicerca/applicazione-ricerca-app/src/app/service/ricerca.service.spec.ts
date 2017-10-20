import { TestBed, inject } from '@angular/core/testing';

import { RicercaService } from './ricerca.service';

describe('RicercaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RicercaService]
    });
  });

  it('should be created', inject([RicercaService], (service: RicercaService) => {
    expect(service).toBeTruthy();
  }));
});
