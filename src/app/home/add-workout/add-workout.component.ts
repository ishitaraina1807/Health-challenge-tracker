import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UpdateWorkoutServices } from '../../services/updateWorkoutServices/updateWorkoutService';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './add-workout.component.html',
  styleUrl: './add-workout.component.css'
})
export class AddWorkoutComponent {
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Calisthenics'];

  constructor(private workoutService: UpdateWorkoutServices, private dialog: MatDialog) {
    // Initialize tableData safely
    const storedData = localStorage.getItem('userData');
    this.tableData = storedData ? JSON.parse(storedData) : [];
  }

  addWorkoutGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    filter_field: new FormControl('', Validators.required), 
    total_time: new FormControl('', [Validators.required, Validators.min(1)])
  });

  tableData: any[] = [];

  addWorkout() {
    if (this.addWorkoutGroup.invalid) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    const name = this.addWorkoutGroup.get('name')?.value?.trim();
    const workoutType = this.addWorkoutGroup.get('filter_field')?.value;
    const workoutMinutes = Number(this.addWorkoutGroup.get('total_time')?.value);

    if (!name) {
      alert("Name is required");
      return;
    }

    // Find existing user (case-insensitive comparison)
    const existingUser = this.tableData.find(
      user => user.name.toLowerCase() === name.toLowerCase()
    );

    if (existingUser) {
      // Add workout to existing user
      existingUser.workouts.push({
        type: workoutType,
        minutes: workoutMinutes
      });
    } else {
      // Create new user with workout
      const newWorkout = {
        id: this.tableData.length + 1,
        name: name,
        workouts: [{
          type: workoutType,
          minutes: workoutMinutes
        }]
      };
      this.tableData.push(newWorkout);
    }

    // Update localStorage and service
    localStorage.setItem('userData', JSON.stringify(this.tableData));
    this.workoutService.updateWorkout(this.tableData);
    this.dialog.closeAll();
    this.addWorkoutGroup.reset();
  }
}