import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root/root.component';
import { RicercaSaleComponent } from './ricerca-sale/ricerca-sale.component';
import { RicercaSaleService } from './service/ricerca-sale.service';

@NgModule({
  declarations: [
    RootComponent,
    RicercaSaleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RicercaSaleService],
  bootstrap: [RootComponent]
})
export class AppModule { }
