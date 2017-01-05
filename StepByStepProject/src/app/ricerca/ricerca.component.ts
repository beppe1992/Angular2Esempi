import { Component, OnInit } from '@angular/core';
import {RicercaDomain} from '../ricerca-domain';
import {RicercaService} from '../ricerca.service';

@Component({
  moduleId: module.id,
  selector: 'app-ricerca',
  templateUrl: 'ricerca.component.html',
  styleUrls: ['ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  filtriRicerca : RicercaDomain;

  ricercaService : RicercaService

  constructor(ricercaService : RicercaService) {
      this.ricercaService = ricercaService;
  }

  ngOnInit() {
      this.filtriRicerca = new RicercaDomain('','');

  }

  ricerca(){
      this.ricercaService.cerca(this.filtriRicerca);
  }
}
