import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { EventServices } from '../../services/EventServices/EventServices';
import { UpdateWorkoutServices } from '../../services/updateWorkoutServices/updateWorkoutService';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  userData = JSON.parse(localStorage.getItem('userData')!);
  tableData = JSON.parse(localStorage.getItem('userData')!);
  currentPage = 0;
  pageSize = 5;
  totalItems = this.tableData.length;
  paginatedData = this.paginateData(this.tableData, this.currentPage, this.pageSize);
  displayedColumns: string[] = ['name', "workouts", "numberOfWorkouts", "totalWorkoutMinutes"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private events: EventServices,
    private workoutService: UpdateWorkoutServices
  ){
    this.events.listen("filter_field", (value: string) => this.filterData(value));
    this.events.listen("search_field", (value: string) => this.searchByName(value));
  }

  ngOnInit() {
    this.updatePaginatedData();
    this.workoutService.workouts$.subscribe((workouts) => {
      if(workouts.length>0){
        this.tableData = workouts;
        this.userData = workouts;
        this.updatePaginatedData();
        this.table.renderRows();
      }
    })
  }

  transformWorkouts(workouts: { type: string, mins: number }[]): string {
    return workouts.map(workout => workout.type).join(", ");
  }

  transformMinutes(workouts: { type: string, minutes: number }[]): number {
    let totalMins: number = 0;
    workouts.forEach(workout => totalMins += workout.minutes);
    return totalMins;
  }

  searchByName(value: string) {
    this.tableData = value.length > 0 ? this.userData.filter((ele:{id: number;name: string;workouts: []}) => ele.name.includes(value)) : this.userData;
    this.updatePaginatedData();
  }

  filterData(value: string) {
    this.tableData = value === "All" ? this.userData : this.userData.filter(
      (ele: { id: number; name: string; workouts: { type: string; minutes: number; }[] }) => 
        ele.workouts.some((workout) => workout.type === value)
    );
    this.updatePaginatedData();
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    this.totalItems = this.tableData.length;

    if (this.currentPage * this.pageSize >= this.totalItems) {
      this.currentPage = Math.max(0, Math.ceil(this.totalItems / this.pageSize) - 1);
    }

    this.paginatedData = this.paginateData(this.tableData, this.currentPage, this.pageSize);

    if (this.paginator) {
      this.paginator.pageIndex = this.currentPage;
    }
  }

  paginateData(data: any[], pageIndex: number, pageSize: number) {
    const startIndex = pageIndex * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }
}
