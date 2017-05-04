import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PunteggiService } from './service/punteggi.service';

@NgModule({
  declarations: [
    HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PunteggiService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
