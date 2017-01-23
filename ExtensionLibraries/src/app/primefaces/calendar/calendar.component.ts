import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  dataNascita: Date;

  time: Date;

  minDate: Date;

  maxDate: Date;

  ita: any;

  constructor() { }

  ngOnInit() {
    
    this.dataNascita = new Date();
    this.time = new Date();

    this.minDate = new Date(2016, 1, 1);
    this.maxDate = new Date(2050, 1, 1);

    this.ita = {
            firstDayOfWeek: 0,
            dayNames: ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"],
            dayNamesShort: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
            dayNamesMin: ["LU","MA","ME","GI","VE","SA","DO"],
            monthNames: [ "Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre" ],
            monthNamesShort: [ "Gen", "Feb", "Mar", "Apr", "Mag", "Giu","Lug", "Ago", "Set", "Ott", "Nov", "Dic" ]
        };
  }

}
