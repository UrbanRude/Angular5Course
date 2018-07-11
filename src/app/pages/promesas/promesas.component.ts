import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
  
    this.contador().then( message => console.log(`termino ${ message }`) )
           .catch( error => console.log(`Error en la promesa ${ error }`));

  }

  ngOnInit() {
  }

  contador():Promise<boolean>{
      return new Promise( (resolve,reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        console.log( contador );
        contador += 1;
        if ( contador == 5) {
          clearInterval( intervalo );
          // reject('Tester error');
          resolve( true );
        }
      },1000 );
    });
  }

}
