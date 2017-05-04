import { Component, OnInit } from '@angular/core';
import { Partita } from '../model/partita';
import { PunteggiService } from '../service/punteggi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  	punteggi : Array<Partita>;

  	constructor(private punteggiService: PunteggiService) { 
  	}
  	 	
 
  	ngOnInit() {
  		this.punteggiService.getPunteggi().subscribe(data => this.punteggi = data);
  	}
  	
  	
	
  	ricerca(){
  	   this.punteggiService.getPunteggi().subscribe(data => this.punteggi = data);
  	}
}
