import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/testing';
import {RicercaDomain} from './ricerca-domain';

describe('RicercaDomain', () => {
 
  it('test del costruttore', () => {
    let ricerca = new RicercaDomain('Giuseppe','Giordano');
    expect(ricerca.nome).toEqual('Giuseppe');
    expect(ricerca.cognome).toEqual('Giordano');
  });

});
