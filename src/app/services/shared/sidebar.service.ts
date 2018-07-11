import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu:[
        { titulo: 'Dashboard', url:'/dashboard' },
        { titulo: 'Progress', url:'/progress'},
        { titulo: 'Graficas 1', url:'/graficas1' },
        { titulo: 'Promesas', url:'/promesas' },
        { titulo: 'RxJS', url:'/rxjs' },
        { titulo: 'Settings', url:'/settings' }
      ]
    }
  ]

  constructor() { }
}