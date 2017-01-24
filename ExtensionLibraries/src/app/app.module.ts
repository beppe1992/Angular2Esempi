import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './menu/app.routes';

// MODULI NECESSARI A PRIME_FACES
import { MenubarModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { ToggleButtonModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { TriStateCheckboxModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

// MODULI DEL MIO PROGETTO
import { AutocompleteinputComponent } from './primefaces/autocompleteinput/autocompleteinput.component';
import { MenuComponent } from './menu/menu.component';
import { CheckboxComponent } from './primefaces/checkbox/checkbox.component';
import { DropdownComponent } from './primefaces/dropdown/dropdown.component';
import { SwitchComponent } from './primefaces/switch/switch.component';
import { TextinputComponent } from './primefaces/textinput/textinput.component';
import { CalendarComponent } from './primefaces/calendar/calendar.component';
import { ButtonComponent } from './primefaces/button/button.component';
import { GrowlmessagesComponent } from './primefaces/growlmessages/growlmessages.component';
import { DialogmoduleComponent } from './primefaces/dialogmodule/dialogmodule.component';


@NgModule({
  declarations: [
    MenuComponent,
    AutocompleteinputComponent,
    CheckboxComponent,
    DropdownComponent,
    SwitchComponent,
    TextinputComponent,
    CalendarComponent,
    ButtonComponent,
    GrowlmessagesComponent,
    DialogmoduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MenubarModule,
    AutoCompleteModule,
    CheckboxModule,
    DropdownModule,
    InputSwitchModule,
    InputTextareaModule,
    InputMaskModule,
    PasswordModule,
    SpinnerModule,
    ToggleButtonModule,
    MultiSelectModule,
    CalendarModule,
    TriStateCheckboxModule,
    ButtonModule,
    SplitButtonModule,
    GrowlModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
