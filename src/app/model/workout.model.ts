import {ExerciseModel} from "./exercise.model";
export interface WorkoutModel{
  exercises : ExerciseModel[],
  nbRepetitions : number
}
