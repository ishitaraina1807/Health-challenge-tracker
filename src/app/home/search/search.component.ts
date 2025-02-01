import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { EventServices } from '../../services/EventServices/EventServices';
import { AddWorkoutComponent } from '../add-workout/add-workout.component';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface WorkoutOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class SearchComponent implements OnInit {
  options: WorkoutOption[] = [
    { value: 'All', label: 'All Workouts' },
    { value: 'Running', label: 'Running' },
    { value: 'Cycling', label: 'Cycling' },
    { value: 'Swimming', label: 'Swimming' },
    { value: 'Yoga', label: 'Yoga' },
    { value: 'Calisthenics', label: 'Calisthenics' }
  ];

  searchGroup = new FormGroup({
    search_field: new FormControl('', [Validators.minLength(2)]),
    filter_field: new FormControl(this.options[0].value)
  });

  constructor(
    private events: EventServices,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // Add debounce time to search field to prevent too many emissions
    this.searchGroup.get('search_field')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.events.emit("search_field", value);
      });

    this.searchGroup.get('filter_field')?.valueChanges
      .subscribe(value => {
        this.events.emit("filter_field", value);
      });
  }

  getWorkoutIcon(workoutType: string): string {
    const iconMap: { [key: string]: string } = {
      'All': 'fitness_center',
      'Running': 'directions_run',
      'Cycling': 'directions_bike',
      'Swimming': 'pool',
      'Yoga': 'self_improvement',
      'Calisthenics': 'sports_gymnastics'
    };
    return iconMap[workoutType] || 'fitness_center';
  }

  clearSearch(): void {
    this.searchGroup.get('search_field')?.setValue('');
  }

  submitForm(): void {
    if (this.searchGroup.valid) {
      this.events.emit("search_field", this.searchGroup.get('search_field')?.value);
    }
  }

  addWorkout(): void {
    const dialogRef = this.dialog.open(AddWorkoutComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'workout-dialog',
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the result if needed
      }
    });
  }
}