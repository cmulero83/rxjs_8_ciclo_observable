// https://www.youtube.com/watch?v=U-afOIMLHKQ&list=PLHgpVrCyLWAoSkzNPYt9nhmtSlpXjtnju&index=8
// Analisis del ciclo observable

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_8_ciclo_observable';


  public ngOnInit(): void{
    const myObservable = Observable.create((observer:any) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(alert('Hola'))
      observer.complete()

    })

    const subs = myObservable.subscribe({
      next: (x: any) => console.log('El siguiente valor es: ' +  x),
      error: (err: any) => console.log('Error ' + err),
      complete: () => console.log('Subscripción completada')
    })

    subs.unsubscribe()

  }

  public ngOnDestroy(): void {}


}
