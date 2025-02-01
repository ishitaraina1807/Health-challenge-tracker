import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-user-charts',
  standalone: true,
  templateUrl: './user-charts.component.html',
  styleUrls: ['./user-charts.component.css']
})
export class UserChartsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedUser!: any;

  chart: any;

  public config: any = {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: "Minutes",
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5,
            max: 45
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
        }
      }
    },
  };

  public initializeChart(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (canvas) {
      if(this.chart){
        this.chart.destroy();
      }
      this.chart = new Chart(canvas, this.config);
      this.resizeChart();
    }
  }

  public updateChart(): void {
    if (this.selectedUser && this.selectedUser.workouts) {
      const labels = this.selectedUser.workouts.map((ele: { type: string; minutes: number }) => ele.type);
      const data = this.selectedUser.workouts.map((ele: { type: string; minutes: number }) => ele.minutes);

      this.config.data.labels = labels;
      this.config.data.datasets[0].data = data;

      if (this.chart) {
        this.chart.update(); 
      } else {
        this.initializeChart();
      }
    }
  }

  public resizeChart(): void {
    if (this.chart) {
      const chartContainer = this.chart.canvas.parentNode;
      this.chart.resize(chartContainer.clientWidth, chartContainer.clientHeight);
    }
  }

  ngOnInit(): void {
    this.initializeChart();
    window.addEventListener('resize', this.resizeChart.bind(this));
  }

  ngOnChanges(): void {
    if (this.selectedUser) {
      this.updateChart();
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeChart.bind(this));
    if (this.chart) {
      this.chart.destroy();
    }
  }
}