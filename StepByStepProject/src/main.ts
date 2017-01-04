import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { RicercaComponent } from './app/ricerca';

if (environment.production) {
  enableProdMode();
}

bootstrap(RicercaComponent);