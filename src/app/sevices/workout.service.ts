import {Injectable} from '@angular/core';
import {WorkoutModel} from "../model/workout.model";

@Injectable()
export class WorkoutService {

  constructor() {
  }

  public list(): WorkoutModel[] {
    return [{
      id : 1,
      name: "HIIT 1",
      nbRepetitions: 3,
      exercises: [{
        name: 'Test exercise',
        duration: 10
      },
        {
          name: 'Repos !',
          duration: 10
        }]
    },
      {
        id:2,
        name: "WORK2",
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
    ];
  }


  get(workoutId: number): WorkoutModel {
    return this.list().filter(workout => workout.id === workoutId)[0];
  }
}
