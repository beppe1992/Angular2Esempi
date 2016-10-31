import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // abilita uso forms angularjs2
import { MyFistComponent } from './myfirstcomponent';


@NgModule({
 imports: [
      BrowserModule,
      FormsModule // abilita uso forms angularjs2
 ],
 declarations: [ MyFistComponent ],
 bootstrap: [ MyFistComponent ]
})


export class AppModule { }
