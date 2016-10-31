import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFistComponent } from './myfirstcomponent';
import { User } from './user';
@NgModule({
 imports: [ BrowserModule ],
 declarations: [ MyFistComponent ],
 bootstrap: [ MyFistComponent ]
})
export class AppModule { }