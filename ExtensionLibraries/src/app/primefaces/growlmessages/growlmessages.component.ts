import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-growlmessages',
  templateUrl: './growlmessages.component.html',
  styleUrls: ['./growlmessages.component.css']
})
export class GrowlmessagesComponent implements OnInit {

  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {
  }

   showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Tutto e\' andato bene' });
  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'Informazione' });
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'Attenzione' });
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Errore' });
  }



  clear() {
    this.msgs = [];
  }

}
