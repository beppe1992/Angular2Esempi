import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})
export class DashboardhomeComponent implements OnInit {

  coloreSelezionato: string;

  colori = [
    {value: 'blue', viewValue: 'blue'},
    {value: 'red', viewValue: 'red'},
    {value: 'green', viewValue: 'green'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
