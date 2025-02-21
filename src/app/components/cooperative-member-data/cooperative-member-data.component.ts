import { Component, effect, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { UserSituation } from '../../core/interfaces/user.interface';

@Component({
  selector: 'app-cooperative-member-data',
  imports: [FontAwesomeModule],
  templateUrl: './cooperative-member-data.component.html',
  styleUrl: './cooperative-member-data.component.scss',
})
export class CooperativeMemberDataComponent {
  faUser = faUser;
  faCheckCircle = faCheckCircle;

  userData = input.required<UserSituation>();

  constructor() {
    effect(() => {
      console.log(this.userData());
    });
  }
}
