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
  // ngOnInit() {
  //   console.log("Workout Types:", this.workoutTypes);
  // }

  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Calisthenics'];

  constructor(private workoutService : UpdateWorkoutServices, private dialog : MatDialog){}

  addWorkoutGroup = new FormGroup({
    user_name: new FormControl('', Validators.required),
    filter_field: new FormControl('', Validators.required), 
    total_time: new FormControl('', [Validators.required, Validators.min(1)])
  });
  

  tableData = JSON.parse(localStorage.getItem('userData')!);

  addWorkout() {
    if (this.addWorkoutGroup.invalid) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    const newWorkout = {
      id: this.tableData.length + 1,
      name: this.addWorkoutGroup.get('user_name')?.value,
      workouts: [{
        type: this.addWorkoutGroup.get('filter_field')?.value,
        minutes: this.addWorkoutGroup.get('total_time')?.value,
      }]
    };

    this.tableData.push(newWorkout);
    localStorage.setItem("userData", JSON.stringify(this.tableData));
    this.workoutService.updateWorkout(this.tableData);
    this.dialog.closeAll();

    this.addWorkoutGroup.reset(); 
  }
}
