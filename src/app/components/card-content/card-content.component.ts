import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {
	isCollapsedone = false;
  isCollapsedtwo = false;
  imagePath = 'assets/images/graph.svg';
}
