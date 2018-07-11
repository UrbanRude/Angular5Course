import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
 

  subscription:Subscription;

  constructor() { 
    
    this.subscription = this.returnObserver()
      .subscribe( 
      numero => console.log(`Subs ${ numero }`),
      error => console.log(`Error en el obs ${ error }`),
      () => console.log(`El observador termino`)
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log(`Abandono la pagina`);
  }

  returnObserver():Observable<any>{
    
    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        const salida = {
          valor:contador              
        }
        contador ++ ;
        observer.next( salida );
        if( contador == 5){
          clearInterval( intervalo ); 
          observer.complete();
        }
      }, 1000 );
      
    }).pipe(
      map( (res:any) => res.valor + 1),
      filter( (val:any) => {
        if( ( val % 2 ) == 1 )
        {
          return true;
        }
        return false;
        
      })
    );

  }

}
