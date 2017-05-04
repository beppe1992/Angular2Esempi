import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PunteggiService {

  constructor(private http: Http) { }

  getPunteggi() {
    return this.http.get(`http://localhost:8080/punteggi`)
    .map((res:Response) => res.json());
  }

}
