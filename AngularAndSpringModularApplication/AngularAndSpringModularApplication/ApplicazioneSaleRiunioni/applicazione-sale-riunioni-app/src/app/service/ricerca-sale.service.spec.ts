import { TestBed, inject } from '@angular/core/testing';

import { RicercaSaleService } from './ricerca-sale.service';

describe('RicercaSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RicercaSaleService]
    });
  });

  it('should be created', inject([RicercaSaleService], (service: RicercaSaleService) => {
    expect(service).toBeTruthy();
  }));
});
