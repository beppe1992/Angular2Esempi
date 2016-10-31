import { Component } from '@angular/core';

@Component({
  selector: 'my-first-component',
  template: `
      <input [(ngModel)]="utente.matricola" placeholder="matricola">
      <input [(ngModel)]="utente.nome" placeholder="nome">
      <input [(ngModel)]="utente.cognome" placeholder="cognome">
      <br><br>
      {{messaggioBenvenuto}} {{utente.matricola}} - <b>{{utente.nome}} {{utente.cognome}}</b>
	  <br><br>
	  <button (click)="saluta($event)">Saluta</button>
	  `
})

export class MyFistComponent {

	messaggioBenvenuto = 'Benvenuto';

	 utente: User = {
      matricola: '',
      nome: '',
	    cognome: ''
    };
	
	saluta(event) {
		console.log('Ciao, '+ this.utente.nome + ' mi hai cliccato');
	}

}

export class User {
  matricola: string;
  nome: string;
  cognome: string;
}
