import { Component } from '@angular/core';
import {AppBarChartComponent} from '../components/app-bar-chart/app-bar-chart.component';
import {DropdownFilterComponent} from '../components/dropdown-filter/dropdown-filter.component';
import {CardContentComponent} from '../components/card-content/card-content.component';
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [AppBarChartComponent, DropdownFilterComponent, CardContentComponent ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}
