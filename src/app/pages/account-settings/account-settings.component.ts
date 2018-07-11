import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    
  }

  cambiarColor( tema:string, link:any ){
    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );
  }

  aplicarCheck( link:any ){
    let selectores:any = document.getElementsByClassName('selector');
    for( let ref of selectores){
        ref.classList.remove('working');
    }
    link.classList.add('working');
  }

}
