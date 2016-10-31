import { Component } from '@angular/core';


@Component({
  selector: 'my-first-component',
  template: `<h1>
			{{messaggioBenvenuto}} {{utente.matricola}} - <b>{{utente.nome}} {{utente.cognome}}</b>
			</h1>`
})
export class MyFistComponent { 
	
	messaggioBenvenuto = 'Benvenuto';
    utente: User = {
      matricola: "are54658",
      nome: 'Giuseppe!',
	  cognome: 'Giordano!'
    };

}