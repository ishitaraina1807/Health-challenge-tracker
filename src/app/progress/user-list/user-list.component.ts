import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  @Output() selectedUser = new EventEmitter<User>();

  userList: User[] = [];
  selected: User | null = null;

  ngOnInit(): void {
    // Safely initialize userList from localStorage
    const storedData = localStorage.getItem('userData');
    this.userList = storedData ? JSON.parse(storedData) : [];
    
    if (this.userList.length > 0) {
      this.selected = this.userList[0];
      this.selectedUser.emit(this.selected);
    }
  }

  toggle(user: User) {
    this.selected = user;
    this.selectedUser.emit(this.selected);
  }
}
