import { Component, OnInit } from '@angular/core';
import {RicercaService} from '../service/ricerca.service'

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  anagrafiche : Array<String>;

  constructor(private ricercaService : RicercaService) { }

  ngOnInit() {
      this.ricercaService.getAnagrafiche().subscribe(data => this.anagrafiche = data);
  }

  ricerca(){
  	  this.ricercaService.getAnagrafiche().subscribe(data => this.anagrafiche = data);
  	}

}
