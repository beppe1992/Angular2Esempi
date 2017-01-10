import { Component, OnInit } from '@angular/core';
import {RisultatiModelService} from '../risultati-model.service';

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
  styleUrls: ['./risultati.component.css']
})
export class RisultatiComponent implements OnInit {

  risultatiService : RisultatiModelService;

  constructor(risultatiService : RisultatiModelService) {
    this.risultatiService = risultatiService;      
  }

  ngOnInit() {
  }

}
