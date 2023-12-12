import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import {ReportsComponent} from '../reports/reports.component'
import {ClientsComponent} from '../clients/clients.component';
import {TemplatesComponent} from '../templates/templates.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser ,faFile, faCircleUser ,faUsers, faChartSimple, faDollarSign,faCog} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ ReportsComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive,ClientsComponent,TemplatesComponent,FontAwesomeModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  faUser = faUser;
  faUsers = faUsers;
  faFile = faFile;
  faCircleUser = faCircleUser;
  faChartSimple = faChartSimple;
  faDollarSign = faDollarSign;
  faCog = faCog;
}
