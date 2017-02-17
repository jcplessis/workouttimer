import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ExerciseComponent} from './exercise/exercise.component';
import {WorkoutComponent} from './workout/workout.component';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import {WorkoutService} from "./services/workout.service";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { HomeComponent } from './home/home.component';
import { RunWorkoutComponent } from './run-workout/run-workout.component';
import { RunExerciseComponent } from './run-exercise/run-exercise.component';
import {AuthService} from "./services/auth.service";
import {AuthenticationCallbackActivateGuard} from "./guard/authentication.guard";
// import { AUTH_PROVIDERS }      from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    WorkoutComponent,
    NavBarComponent,
    HomeComponent,
    RunWorkoutComponent,
    RunExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    WorkoutService,
    AuthService,
    AuthenticationCallbackActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
