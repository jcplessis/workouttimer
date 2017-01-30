import {Routes} from "@angular/router";
import {WorkoutComponent} from "./workout/workout.component";
import {HomeComponent} from "./home/home.component";
import {RunWorkoutComponent} from "./run-workout/run-workout.component";

export const ROUTES:Routes = [
  { path: '', component: HomeComponent },
  { path: 'workout',
    children: [
      { path: ':workoutId', component: WorkoutComponent },
      { path: ':workoutId/run', component: RunWorkoutComponent },
    ]
  }
];
