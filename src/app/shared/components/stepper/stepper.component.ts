import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  currentStep = 1;
  steps = [
    { label: 'Inicio', status: 'current' },
    { label: 'Documentos', status: 'uncoming' },
    { label: 'Dados Cadastrais', status: 'uncoming' },
    { label: 'Admissão', status: 'uncoming' },
  ];

  nextStep(): void {
    this.currentStep++;
  }

  prevStep(): void {
    this.currentStep--;
  }

  isLastStep(): boolean {
    return this.currentStep === this.steps.length;
  }

  isFirstStep(): boolean {
    return this.currentStep === 1;
  }

  isUpcomingStep(): boolean {
    return this.currentStep < this.steps.length;
  }
}
