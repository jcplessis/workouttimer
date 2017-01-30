import {Component, OnInit, Input} from '@angular/core';
import {RunningExerciseModel} from "../model/exercise.model";

@Component({
  selector: 'wt-run-exercise',
  templateUrl: './run-exercise.component.html',
  styleUrls: ['./run-exercise.component.css']
})
export class RunExerciseComponent implements OnInit {

  @Input() exerciseModel: RunningExerciseModel;

  constructor() { }

  ngOnInit() {
  }

  public progress(exercise: RunningExerciseModel){
    return 100 * (exercise.duration - exercise.durationLeft) / exercise.duration;
  }

}
