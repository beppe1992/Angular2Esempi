import { RicercaSaleService } from '../service/ricerca-sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ricerca-sale',
  templateUrl: './ricerca-sale.component.html',
  styleUrls: ['./ricerca-sale.component.css']
})
export class RicercaSaleComponent implements OnInit {

  sale : Array<String>;

  constructor(private ricercaSaleService : RicercaSaleService) { }

  ngOnInit() {
       this.ricercaSaleService.getSale().subscribe(data => this.sale = data);
  }

  ricercaSale() {
       this.ricercaSaleService.getSale().subscribe(data => this.sale = data);
  }

}
