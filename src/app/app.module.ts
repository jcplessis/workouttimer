import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ExerciseComponent} from './exercise/exercise.component';
import {WorkoutComponent} from './workout/workout.component';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
