import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {

  inputTextArea : string;
  inputMask : string;
  inputPassword : string;
  inputSpinner : string;
  inputHtml : string;

  constructor() { }

  ngOnInit() {
  }

}
