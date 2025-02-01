import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { TableComponent } from "./table/table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
