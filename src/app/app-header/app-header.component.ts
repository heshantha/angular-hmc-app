import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [NgbDropdownModule,FontAwesomeModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
	collapsed = true;
  faUser = faUser;
}
