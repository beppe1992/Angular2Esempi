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


}
