import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RootComponent } from './root/root.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { RicercaService } from './service/ricerca.service';

@NgModule({
  declarations: [
    RootComponent,
    RicercaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RicercaService],
  bootstrap: [RootComponent]
})
export class AppModule { }