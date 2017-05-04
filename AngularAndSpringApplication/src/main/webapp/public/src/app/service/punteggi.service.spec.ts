/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PunteggiService } from './punteggi.service';

describe('PunteggiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PunteggiService]
    });
  });

  it('should ...', inject([PunteggiService], (service: PunteggiService) => {
    expect(service).toBeTruthy();
  }));
});
