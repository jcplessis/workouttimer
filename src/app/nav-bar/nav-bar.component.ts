import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {WorkoutService} from "../sevices/workout.service";
import {WorkoutModel} from "../model/workout.model";
import {Router} from "@angular/router";

@Component({
  selector: 'wt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private workouts: WorkoutModel[];

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor(private workoutService: WorkoutService,
              private router: Router) {
  }

  ngOnInit() {
    this.workouts = this.workoutService.list();
  }

  public totalTime(workout: WorkoutModel) {
    return workout.exercises.map(
      exercise => exercise.duration
    ).reduce((a, b) => a + b);
  }

  public goToWorkout(id: number) {
    this.router.navigate(['workout', id]);
    this.clicked.emit();
  }

}
