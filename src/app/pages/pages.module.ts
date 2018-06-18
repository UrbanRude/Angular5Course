import { NgModule } from '@angular/core';

/** IMPORTACION DE RUTAS **/
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
   declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
   ],
   exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component, 
   ],
   imports:[
       SharedModule,
       PAGES_ROUTES
   ]
})

export class PagesModule { }