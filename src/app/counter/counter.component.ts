import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import  * as counter from '../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(counter.increment());
  }

  decrement() {
    this.store.dispatch(counter.decrement());
  }

  reset() {
    this.store.dispatch(counter.reset());
  }

}
