import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cooperative-member-data',
  imports: [FontAwesomeModule],
  templateUrl: './cooperative-member-data.component.html',
  styleUrl: './cooperative-member-data.component.scss',
})
export class CooperativeMemberDataComponent {
  faUser = faUser;
  faCheckCircle = faCheckCircle;
}
