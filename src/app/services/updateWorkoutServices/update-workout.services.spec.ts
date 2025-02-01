import { TestBed } from '@angular/core/testing';
import { UpdateWorkoutServices } from './updateWorkoutService';

describe('UpdateWorkoutServices', () => {
  let service: UpdateWorkoutServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateWorkoutServices);
  });

  it('should instantiate the service successfully', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize workouts as an empty array', (done) => {
    service.workouts$.subscribe((workouts) => {
      expect(workouts).toEqual([]);
      done();
    });
  });

  it('should correctly update workouts when updateWorkout is invoked', (done) => {
    const sampleWorkouts = [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 15 },
    ];

    service.workouts$.subscribe((workouts) => {
      if (workouts.length > 0) {
        expect(workouts).toEqual(sampleWorkouts);
        done();
      }
    });

    service.updateWorkout(sampleWorkouts);
  });
});
