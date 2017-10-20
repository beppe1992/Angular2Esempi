import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RicercaSaleService {

  constructor(private http: Http) { }

  getSale() {
    return this.http.get(`api/sale/all`).map((res:Response) => res.json());
  }

}
