import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import  * as scoreboard from '../actions/scoreboard-page.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {

  @ViewChild('home', {static: false}) home: ElementRef;
  @ViewChild('away', {static: false}) away: ElementRef;
  scoreboard$: Observable<scoreboard.State>;

  constructor(private store: Store<{ scoreboard: scoreboard.State }>) {
    this.scoreboard$ = store.pipe(select('scoreboard'));
  }

  homeScore() {
    this.store.dispatch(scoreboard.homeScore());
  }

  awayScore() {
    this.store.dispatch(scoreboard.awayScore());
  }

  resetScore() {
    this.store.dispatch(scoreboard.resetScore());
  }

  setScores() {
    this.store.dispatch(scoreboard.setScores({
      game: {
        home: parseInt(this.home.nativeElement.value, 10) || 0,
        away: parseInt(this.away.nativeElement.value, 10) || 0
      }
    }));
  }

}
