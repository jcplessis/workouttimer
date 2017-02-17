import {Routes} from "@angular/router";
import {WorkoutComponent} from "./workout/workout.component";
import {HomeComponent} from "./home/home.component";
import {RunWorkoutComponent} from "./run-workout/run-workout.component";
import {AuthenticationCallbackActivateGuard} from "./guard/authentication.guard";

export const ROUTES:Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticationCallbackActivateGuard] },
  { path: 'workout',
    children: [
      { path: ':workoutId', component: WorkoutComponent },
      { path: ':workoutId/run', component: RunWorkoutComponent },
    ]
  },
  { path: '**', redirectTo: '' }
  // {path: 'access_token', component: HomeComponent}
];
