import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../components/json-builder/json-builder.component';

@Injectable({
  providedIn: 'root',
})
export class ComplexRulesService {
  private rules: Group[] = [];
  private rulesSubject = new BehaviorSubject<Group[]>(this.rules);
  rulesChanged = this.rulesSubject.asObservable();

  constructor() {}

  getRules(): Group[] {
    return this.rules;
  }

  updateRules(newRules: Group[]): void {
    this.rules = [...newRules];
    this.rulesSubject.next(this.rules);
  }

  addGroup(): void {
    const newGroup: Group = {
      selectedRadio: 'AND',
      conditions: [],
      groups: [],
    };
    this.rules = [...this.rules, newGroup];
    this.rulesSubject.next(this.rules);
  }

  addCondition(
    groupIndex: number,
    condition: {
      selectedProp: string;
      selectedCond: string;
      numericValue: number;
    }
  ): void {
    this.rules = this.rules.map((group, index) => {
      if (index === groupIndex) {
        return { ...group, conditions: [...group.conditions, condition] };
      }
      return group;
    });
    this.rulesSubject.next(this.rules);
  }
}
