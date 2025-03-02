import { Component, Input } from '@angular/core';
import { propsOptions } from '../../helpers/common-properties';
import { condOptions } from '../../helpers/common-conditions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'complex-conditions',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './complex-conditions.component.html',
  styleUrl: './complex-conditions.component.scss',
})
export class ComplexConditionsComponent {
  @Input() conditions: any[] = [
    {
      selectedProp: propsOptions[0].value,
      selectedCond: condOptions[0].value,
      numericValue: 0,
    },
  ]; // Default condition on load
  selectedProp: string = '';
  selectedCond: string = '';
  numericValue: number = 0;

  propertyOptions = propsOptions;
  conditionsOptions = condOptions;

  addCondition() {
    this.conditions.push({
      selectedProp: this.propertyOptions[0].value, // Default first property
      selectedCond: this.conditionsOptions[0].value, // Default first condition
      numericValue: 0,
    });
  }

  removeCondition(index: number) {
    if (this.conditions.length > 1) {
      this.conditions.splice(index, 1); // Prevent removing the last condition
    }
  }
}
