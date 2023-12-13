import { Component, Input } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-app-bar-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './app-bar-chart.component.html',
  styleUrls: ['./app-bar-chart.component.scss'], // Corrected to styleUrls
})
export class AppBarChartComponent {
  title = 'dashboard-app-report';
  @Input() childData: string = 'default value'; // Initialize here

  chart: any = [];
  constructor() {}

  ngOnInit() {
    const isMobile = window.innerWidth <= 768;
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [
          '1st Auguest 2023',
          '2nd Auguest 2023',
          '3rd Auguest 2023',
          '4th Auguest 2023',
          '5th Auguest 2023',
          '6th Auguest 2023',
          '7th Auguest 2023',
        ],
        datasets: [
          {
            label: '',
            data: [12, 19, 3, 5, 2, 3, 10],
            backgroundColor: '#293894',
            borderWidth: 1,
            borderColor: '#6A6A6A',
            barThickness: 70,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: !isMobile,
        scales: {
          y: {
            display: false,
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
