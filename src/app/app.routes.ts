import {Routes} from "@angular/router";
import {WorkoutComponent} from "./workout/workout.component";

export const ROUTES:Routes = [
  { path: '', component: WorkoutComponent },
  { path: 'workout',
    children: [
      { path: '', component: WorkoutComponent },
      { path: ':workoutId', component: WorkoutComponent },
    ]
  }
];
