import { Routes  } from '@angular/router';

import { DashboardhomeComponent } from '../dashboardhome/dashboardhome.component';
import { FunzionalitaricercaComponent } from '../funzionalitaricerca/funzionalitaricerca.component';
import { RestservicecallComponent } from '../restservicecall/restservicecall.component';

export const routes: Routes  = [
        { path: '', component: DashboardhomeComponent },
        { path: 'ricerca-base', component: FunzionalitaricercaComponent },
        { path: 'rest-service', component: RestservicecallComponent }
];