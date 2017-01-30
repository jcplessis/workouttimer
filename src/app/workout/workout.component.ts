import {Component, OnInit} from '@angular/core';
import {WorkoutModel} from "../model/workout.model";
import {ActivatedRoute} from "@angular/router";
import {WorkoutService} from "../sevices/workout.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'wt-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workoutModel: WorkoutModel;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const workoutId = parseInt(this.route.snapshot.params["workoutId"]);
      this.workoutModel = this.workoutService.get(workoutId);
    });
  }

}
