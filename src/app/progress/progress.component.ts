import { Component } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";
import { UserChartsComponent } from "./user-charts/user-charts.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Workout } from '../services/updateWorkoutServices/updateWorkoutService';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [UserListComponent, UserChartsComponent, CommonModule, FormsModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  selectedUser! : {id: number;name: string;workouts: Workout[]};
}
