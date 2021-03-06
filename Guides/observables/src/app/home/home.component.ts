import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from "rxjs"
import { map, filter } from "rxjs/operators"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObs: Subscription;

  constructor() { }

  ngOnInit() {
    const customIntervalObs = Observable.create(observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if(count == 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error("Count is greater 3!"));
        }
        count++;
      }, 1000)
    });

    this.firstObs = customIntervalObs.pipe(filter( (data: number) =>  {
      return data % 2 == 0;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log("Completed!");
    });
  }

  ngOnDestroy(){
    this.firstObs.unsubscribe();
  }

}
