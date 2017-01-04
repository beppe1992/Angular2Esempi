import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RisultatiModelService } from './risultati-model.service';

describe('RisultatiModelService Service', () => {
  beforeEachProviders(() => [RisultatiModelService]);

  it('should ...',
      inject([RisultatiModelService], (service: RisultatiModelService) => {
    expect(service).toBeTruthy();
  }));
});
