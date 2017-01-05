import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { RicercaComponent } from './app/ricerca';
import { RisultatiComponent } from './app/risultati';
import {RicercaService} from './app/ricerca.service';
import {RisultatiModelService} from './app/risultati-model.service';

if (environment.production) {
  enableProdMode();
}

// Inizializza il componente e i relativi services che saranno iniettati
bootstrap(RicercaComponent,[RicercaService,RisultatiModelService]);
bootstrap(RisultatiComponent,[RisultatiModelService]);

