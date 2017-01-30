export interface ExerciseModel {
  name: string;
  duration: number;
}

export interface RunningExerciseModel extends ExerciseModel{
  durationLeft : number;
}
