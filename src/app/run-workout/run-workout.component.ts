import {Component, OnInit, OnDestroy} from "@angular/core";
import {WorkoutService} from "../services/workout.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import {RunningExerciseModel} from "../model/exercise.model";
import {WorkoutModel} from "../model/workout.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'wt-run-workout',
  templateUrl: './run-workout.component.html',
  styleUrls: ['./run-workout.component.css']
})
export class RunWorkoutComponent implements OnInit, OnDestroy {

  exercises: RunningExerciseModel[] = [];
  nbRepetitions: number = 0;
  currentExercise: number = 0;
  private workoutModel: WorkoutModel;
  private sub: Subscription;
  private end: number;
  private begin: number;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {
  }

  ngOnInit() {
    const workoutId = parseInt(this.route.snapshot.params["workoutId"]);
    this.workoutModel = this.workoutService.get(workoutId);
    this.workoutModel.exercises.forEach(exercise =>
      this.exercises.push({
          name:exercise.name,
          duration:exercise.duration,
          durationLeft:exercise.duration,
      }));
    this.nbRepetitions = this.workoutModel.nbRepetitions;
  }

  ngOnDestroy(){
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  public start(){
    this.begin = Date.now();
    this.sub = Observable.interval(200).take(1000)
      .subscribe(step=> {
        console.log(step);
        let exercise = this.exercises[this.currentExercise];
        exercise.durationLeft -= 0.2;
        if(exercise.durationLeft<=0.100){
          exercise.durationLeft = 0;
          this.currentExercise ++;
          if(this.currentExercise >= this.exercises.length){
            this.nbRepetitions--;
            this.currentExercise = 0;
            if(this.nbRepetitions == 0){
              this.end = Date.now();
              this.sub.unsubscribe();
              const tot = this.end - this.begin;
            }else {
              this.exercises.forEach(exercise => exercise.durationLeft = exercise.duration);
            }
          }
        }

      });
  }

}
