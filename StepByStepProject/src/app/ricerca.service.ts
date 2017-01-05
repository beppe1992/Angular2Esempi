import { Injectable } from '@angular/core';
import {RicercaDomain} from './ricerca-domain';
import {RisultatiModelService} from './risultati-model.service';

@Injectable()
export class RicercaService {

  risultatiModel : RisultatiModelService

  constructor(risultatiModel : RisultatiModelService) {
      this.risultatiModel = risultatiModel;
  }

  cerca (filtriRicerca: RicercaDomain) : void{

     // creo una lista mock
     var risultatiRicercaMock: Array<String> = [];
      risultatiRicercaMock.push("risultato1");
      risultatiRicercaMock.push("risultato2");

      // modifico il model comune a tutta l'applicazione con i risultati mock
      this.risultatiModel.setRisultati(risultatiRicercaMock);
  } 

}
