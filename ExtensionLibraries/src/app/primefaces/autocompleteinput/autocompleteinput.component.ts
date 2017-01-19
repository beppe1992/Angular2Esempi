import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocompleteinput',
  templateUrl: './autocompleteinput.component.html',
  styleUrls: ['./autocompleteinput.component.css']
})
export class AutocompleteinputComponent implements OnInit {

  testoScelto: string;
    
  possibiliScelte: string[];

  risultatiRicerca: string[];

  constructor() { }

  ngOnInit() {
      this.possibiliScelte = ['Verona','Torino','Milano']; 

      this.risultatiRicerca = [];
  }

  search(event) {
      this.risultatiRicerca = [];
      
      
        for (let scelta of this.possibiliScelte) {
          if( scelta.toUpperCase().includes(event.query.toUpperCase())){
              this.risultatiRicerca.push(scelta);
          }
      }
    }
  
}
