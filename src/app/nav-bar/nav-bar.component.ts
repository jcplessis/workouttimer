import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {WorkoutService} from "../services/workout.service";
import {WorkoutModel} from "../model/workout.model";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'wt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private workouts: WorkoutModel[];

  @Output() navigating: EventEmitter<any> = new EventEmitter();

  constructor(private workoutService: WorkoutService,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.workouts = this.workoutService.list();
  }

  public totalTime(workout: WorkoutModel) {
    return workout.exercises.map(
      exercise => exercise.duration
    ).reduce((a, b) => a + b) * workout.nbRepetitions;
  }

  public propagateNavigation() {
    this.navigating.emit();
  }

}
