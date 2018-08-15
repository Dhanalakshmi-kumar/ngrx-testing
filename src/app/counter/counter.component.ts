import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as counterActions from './../actions/counter.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // injecting store to the counter component
  constructor(private store: Store<any>) { }
  count: number= 0;

  ngOnInit() {
    // select the slice of state and return as observable
    // inorder to notify the changes of state to the component we should subscribe  this observalbe
    // or in otherwords subscribe is to recieve the state change notification
    this.store.pipe(select('counterReducer')).subscribe(
      counter => {
        console.log(counter);
        if (counter) {
          this.count = counter.counter;
        }
      }
    );
  }

  onAddCount(counter?: number) {
    console.log(counter);
    this.store.dispatch({
      type: counterActions.INCREMENT_COUNT,
      payload: counter
    });
  }

  onDecrementCount(counter?: number) {
    console.log(counter);
    this.store.dispatch({
      type: counterActions.DECREMENT_COUNT,
      payload: counter
    });
  }

}
