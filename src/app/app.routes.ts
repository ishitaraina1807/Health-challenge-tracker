import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ProgressComponent } from './progress/progress.component';

export const routes: Routes = [
    {path : "", component: HomeComponent},
    {path :"progress", component: ProgressComponent}
];
