import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { userData } from '../shared/models/userData';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Health-Challenge-Tracker';
  constructor(){
    const storedUserData = JSON.parse(localStorage.getItem('userData')!);
    if (!storedUserData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
    
  }
}
