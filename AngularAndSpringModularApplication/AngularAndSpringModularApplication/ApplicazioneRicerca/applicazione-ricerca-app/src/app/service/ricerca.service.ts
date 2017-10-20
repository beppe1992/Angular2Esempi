import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RicercaService {

  constructor(private http: Http) { }

  getAnagrafiche() {
    return this.http.get(`api/anagrafiche/all`).map((res:Response) => res.json());
  }

}
