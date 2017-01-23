import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
      this.items = [
            {label: 'Aggiorna', icon: 'fa-refresh', command: () => {
                this.azioneAggiorna();
            }},
            {label: 'Elimina', icon: 'fa-close', command: () => {
                this.azioneElimina();
            }}
        ];
  }

  azioneBase() {
    console.log('Cliccato pulsante base');
  }

 azioneSalva() {
    console.log('Cliccato pulsante salva');
  }

  azioneAggiorna() {
    console.log('Cliccato pulsante aggiorna');
  }

  azioneElimina() {
    console.log('Cliccato pulsante elimina');
  }

}
