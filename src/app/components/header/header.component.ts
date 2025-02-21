import { Component } from '@angular/core';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { RouterLink } from '@angular/router';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-header',
  imports: [UserMenuComponent, RouterLink, NotificationsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
