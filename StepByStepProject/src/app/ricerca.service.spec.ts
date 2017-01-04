import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RicercaService } from './ricerca.service';

describe('RicercaService', () => {
  beforeEachProviders(() => [RicercaService]);

  it('should ...',
      inject([RicercaService], (service: RicercaService) => {
    expect(service).toBeTruthy();
  }));
});
