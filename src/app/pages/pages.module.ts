import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** IMPORTACION DE RUTAS **/
import { PAGES_ROUTES } from './pages.routes';

/** NG2 CHARTS */
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
   declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent        
   ],
   exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
   ],
   imports:[
       SharedModule,
       PAGES_ROUTES,
       FormsModule,
       ChartsModule
   ]
})

export class PagesModule { }