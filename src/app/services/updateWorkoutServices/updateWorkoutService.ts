import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Workout {
  type: string;
  minutes: number;
}

@Injectable({
  providedIn: 'root',
})
export class UpdateWorkoutServices {
  private workoutsSource = new BehaviorSubject<Workout[]>([]);
  workouts$ = this.workoutsSource.asObservable();

  updateWorkout(workout: Workout[]) {
    this.workoutsSource.next(workout);
  }
}
