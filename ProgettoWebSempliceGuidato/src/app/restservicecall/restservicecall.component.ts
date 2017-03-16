import { Component, OnInit } from '@angular/core';
import { ServiceconsumerService } from './serviceconsumer.service';
import { ServiceResultObj } from './service-result-obj';

@Component({
  selector: 'app-restservicecall',
  templateUrl: './restservicecall.component.html',
  styleUrls: ['./restservicecall.component.css']
})
export class RestservicecallComponent implements OnInit {

  risultatiRicerca: ServiceResultObj[] = [];

  // dependency injection in maniera alternativa
  constructor(private serviceConsumer : ServiceconsumerService) { }

  ngOnInit() {
  }

  ricerca(){
      this.serviceConsumer
      .getAll()
      .subscribe(data =>  this.risultatiRicerca = data );        
  }

}
