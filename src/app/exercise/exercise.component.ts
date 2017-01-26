import {Component, OnInit, Input} from '@angular/core';
import {ExerciseModel} from "../model/exercise.model";

@Component({
  selector: 'wt-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input() exerciseModel : ExerciseModel;

  constructor() {}

  ngOnInit() {
  }

}
