import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faStar = faStar;

  menuItems = [
    {
      name: 'Admissão',
      url: '/admissao',
      icon: faMagnifyingGlass,
    },
    {
      name: 'Expediente',
      url: '/expediente',
      icon: faStar,
    },
  ];
}
