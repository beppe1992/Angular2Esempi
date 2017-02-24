import { Component, OnInit } from '@angular/core';
import { ServiceconsumerService } from './serviceconsumer.service';

@Component({
  selector: 'app-restservicecall',
  templateUrl: './restservicecall.component.html',
  styleUrls: ['./restservicecall.component.css']
})
export class RestservicecallComponent implements OnInit {

  risultatiRicerca: String[] = [];

  // dependency injection in maniera alternativa
  constructor(private serviceConsumer : ServiceconsumerService) { }

  ngOnInit() {
  }

  ricerca(){
      this.serviceConsumer
      .getAll()
      .subscribe(p => this.risultatiRicerca = p)
  }

}
