import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { DogsService } from '../services/dogs.service';
import * as DogActions from '../actions/dog.actions';

@Injectable()
export class DogEffects {

  loadDog$ = createEffect(() => this.actions$.pipe(
    ofType(DogActions.LOADRANDOMDOG),
    switchMap(() => this.dogService.getRandom()
      .pipe(
        map((dog: DogActions.State) => (
          DogActions.dogLoaded(dog)),
          catchError(() => EMPTY)
        ))
    )
  ));

  constructor(
    public actions$: Actions,
    private dogService: DogsService
  ) { }
}
