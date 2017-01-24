import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogmodule',
  templateUrl: './dialogmodule.component.html',
  styleUrls: ['./dialogmodule.component.css']
})
export class DialogmoduleComponent implements OnInit {

   display: boolean = false;

    showDialog() {
        this.display = true;
    }


  constructor() { }

  ngOnInit() {
  }

}
