import {ExerciseModel} from "./exercise.model";
export interface WorkoutModel {
  id: number;
  name: string;
  exercises: ExerciseModel[];
  nbRepetitions: number;
}

