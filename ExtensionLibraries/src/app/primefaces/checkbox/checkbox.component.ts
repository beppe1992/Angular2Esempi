import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  selectedCitta: string[] = [];

  state: any;

  constructor() { }

  ngOnInit() {
  }

}
