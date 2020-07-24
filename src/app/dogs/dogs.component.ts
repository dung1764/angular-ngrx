import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import  * as dogAction from '../actions/dog.actions';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dog$: Observable<dogAction.State>;

  constructor(private store: Store<{ dog: dogAction.State }>) {
    this.dog$ = store.pipe(select('dog'));
  }

  ngOnInit() {
    this.store.dispatch(dogAction.loadRandomDog());
  }

}
