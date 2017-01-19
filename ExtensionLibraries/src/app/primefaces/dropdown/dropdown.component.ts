import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  citta: SelectItem[];

  selectedCitta: string;

  multiSelectedCitta: string[];


  constructor() { }

  ngOnInit() {
    this.citta = [];
    this.citta.push({ label: 'Verona', value: 'VR' });
    this.citta.push({ label: 'Torino', value: 'TO' });
    this.citta.push({ label: 'Milano', value: 'MI' });
  }

}
