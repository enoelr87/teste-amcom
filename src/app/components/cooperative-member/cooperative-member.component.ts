import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CooperativeMemberDataComponent } from '../cooperative-member-data/cooperative-member-data.component';
import { CpfMaskDirective } from '../../core/directives/cpf-mask.directive';

@Component({
  selector: 'app-cooperative-member',
  imports: [
    ReactiveFormsModule,
    CooperativeMemberDataComponent,
    CpfMaskDirective,
  ],
  templateUrl: './cooperative-member.component.html',
  styleUrl: './cooperative-member.component.scss',
})
export class CooperativeMemberComponent {
  cooperativeMemberForm = new FormGroup({
    cpf: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
    ]),
  });

  showCooperativeMemberData = false;

  consultCPF() {
    if (this.cooperativeMemberForm.value) {
      this.showCooperativeMemberData = true;
    }
  }
}
