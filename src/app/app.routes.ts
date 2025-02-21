import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admissao',
    loadComponent: () =>
      import(
        './components/cooperative-member/cooperative-member.component'
      ).then((m) => m.CooperativeMemberComponent),
  },
];
