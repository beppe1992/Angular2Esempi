import { Routes  } from '@angular/router';

import { AutocompleteinputComponent } from '../primefaces/autocompleteinput/autocompleteinput.component';
import { CheckboxComponent } from '../primefaces/checkbox/checkbox.component';
import { DropdownComponent } from '../primefaces/dropdown/dropdown.component';
import { SwitchComponent } from '../primefaces/switch/switch.component';
import { TextinputComponent } from '../primefaces/textinput/textinput.component';

export const routes: Routes  = [
        { path: 'autocompleteinput', component: AutocompleteinputComponent },
         { path: 'checkbox', component: CheckboxComponent },
         { path: 'dropdown', component: DropdownComponent },
         { path: 'switch', component: SwitchComponent },
         { path: 'textinput', component: TextinputComponent }
];