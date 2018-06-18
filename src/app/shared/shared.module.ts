import { NgModule } from "@angular/core";

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefounComponent } from './nopagefoun/nopagefoun.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations:[
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefounComponent,
        SidebarComponent
    ],
    exports:[
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefounComponent,
        SidebarComponent 
    ]
})

export class SharedModule { }