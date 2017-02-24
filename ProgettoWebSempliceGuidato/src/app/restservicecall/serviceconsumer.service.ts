import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceconsumerService {

  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http) { }

  getAll(): Observable<String[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapPersons);
      return people$;

  };

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

// funzionalita' per la conversione della risposta
function mapPersons(response:Response): String[]{
        return response.json().results.map(extractName)
}

function extractName(r:any): String{

  return r.name;
}
