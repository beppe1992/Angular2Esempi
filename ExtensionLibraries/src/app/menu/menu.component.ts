import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {

      this.items = [
            {
                label: 'PrimeFaces',
                items:[
                    {label: 'Autocomplete',routerLink: ['/autocompleteinput']},
                    {label: 'Checkbox',routerLink: ['/checkbox']},
                    {label: 'Dropdown',routerLink: ['/dropdown']},
                    {label: 'Switch',routerLink: ['/switch']},
                    {label: 'TextInput',routerLink: ['/textinput']},
                    {label: 'Calendar',routerLink: ['/calendar']},
                    {label: 'Button',routerLink: ['/button']},
                    {label: 'GrowlMessages',routerLink: ['/growlmessages']},
                    {label: 'DialogModule',routerLink: ['/dialogmodule']}        
                    ]
            }
        ];
  }

}

