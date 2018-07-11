import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedService,
  SidebarService  
} from './services.index';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[ 
    SharedService,
    SidebarService
  ]
})
export class ServiceModule { }
