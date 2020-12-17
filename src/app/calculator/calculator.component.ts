import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  newEqn: string = '';
  newValue: string = '';

  constructor() {
  }

  getNewValue(event): void {
    this.newValue = this.newValue + event.target.value;
  }

  getEquation(event): void {
    this.newEqn = this.newEqn + this.newValue + event.target.value;
    this.newValue = '';
  }

  calculateAns(): void {
    this.newValue = eval(this.newEqn + this.newValue);
    this.newEqn = '';
  }

  clearAll(): void {
    this.newValue = '';
    this.newEqn = '';
  }
}
