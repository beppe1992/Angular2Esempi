import { Injectable } from '@angular/core';

@Injectable()
export class RisultatiModelService {

  private _risultati : Array<String>;


  constructor() {}

  setRisultati (risultati: Array<String>){
    this._risultati = risultati;
  }

  get risultati(): Array<String> { return this._risultati; }

}
