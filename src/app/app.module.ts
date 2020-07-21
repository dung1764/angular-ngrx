import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers/index';
import { CounterComponent } from './counter/counter.component';
import { environment } from 'src/environments/environment';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ counter: counterReducer, scoreboard: scoreboardReducer }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
      }
  }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
