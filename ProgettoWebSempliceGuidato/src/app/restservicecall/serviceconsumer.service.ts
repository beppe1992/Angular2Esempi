import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServiceResultObj } from './service-result-obj';

@Injectable()
export class ServiceconsumerService {

  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http) { }

  getAll(): Observable<ServiceResultObj[]>{
    return this.http
      .get(`${this.baseUrl}/people`)
      .map(response => response.json().results);

  };

  // ESEMPIO DI METODO CHE CHIAMA UN SERVIZIO DISPOSITIVO (NON ESISTE IL SERVIZIO VERO), RESTITUISCE UNA SEMPLICE Promise
  // IN QUANTO NON SONO NECESSARIE LE FEATURE CHE GLI OBSERVABLE METTONO A DISPOSIZIONE
  putNewObj(objDaInserire : ServiceResultObj ): Promise<String>{
    return this.http
      .post(`${this.baseUrl}/newUtente`,objDaInserire)
      .map(response => response.json()  as String)
      .toPromise();

  };


}
