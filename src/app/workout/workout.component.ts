import {Component, OnInit} from '@angular/core';
import {WorkoutModel} from "../model/workout.model";

@Component({
  selector: 'wt-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workoutModel: WorkoutModel;

  constructor() {
    this.workoutModel = {
      name: "Workout test",
      nbRepetitions: 3,
      exercises: [{
        name: 'Test exercise',
        duration: 10
      },
        {
          name: 'Repos !',
          duration: 10
        }]
    }

  }

  ngOnInit() {
  }

}
