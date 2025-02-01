import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})


export class UserListComponent implements OnInit{
  @Output() selectedUser = new EventEmitter<{id: number;name: string;workouts: []}>();

  userList = JSON.parse(localStorage.getItem("userData")!);

  selected: {id: number;name: string;workouts: []} = this.userList[0];

  toggle(user: {id: number;name: string;workouts: []}) {
    this.selected = user;
    this.selectedUser.emit(this.selected);
  }
  ngOnInit(): void {
    this.selectedUser.emit(this.userList[0]);
  }
}


