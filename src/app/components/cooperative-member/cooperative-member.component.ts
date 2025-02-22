import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CooperativeMemberDataComponent } from '../cooperative-member-data/cooperative-member-data.component';
import { CpfMaskDirective } from '../../core/directives/cpf-mask.directive';
import { SearchUserService } from '../../core/services/search-user.service';
import { UserSituation } from '../../core/interfaces/user.interface';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-cooperative-member',
  imports: [
    ReactiveFormsModule,
    CooperativeMemberDataComponent,
    CpfMaskDirective,
    StepperComponent,
  ],
  templateUrl: './cooperative-member.component.html',
  styleUrl: './cooperative-member.component.scss',
})
export class CooperativeMemberComponent {
  private searchUserService = inject(SearchUserService);
  cooperativeMemberForm = new FormGroup({
    cpf: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
    ]),
  });
  userData: UserSituation | null = null;

  errorMessage!: string;

  getErrorMessage(controlName: string): string | null {
    const control = this.cooperativeMemberForm.get(controlName);
    if (control?.hasError('required')) {
      return 'CPF é obrigatório';
    }
    if (control?.hasError('pattern')) {
      return 'CPF é inválido.';
    }
    return null;
  }

  clearErrorMessage(): void {
    if (this.errorMessage) {
      this.errorMessage = '';
    }
  }

  consultCPF(): void {
    if (this.cooperativeMemberForm.value) {
      const cpf = this.cooperativeMemberForm.value.cpf as string;
      this.searchUserService.getUserData(cpf.replace(/\D/g, '')).subscribe({
        next: (data) => {
          if (data.length > 0) {
            this.userData = data[0];
            this.errorMessage = '';
          } else {
            this.errorMessage = 'Usuário não encontrado';
            this.userData = null;
          }
        },
        error: (err) => {
          this.errorMessage = 'Erro ao consultar o usuário';
          this.userData = null;
        },
      });
    }
  }
}
