import { Component, OnInit, Inject } from '@angular/core';
import { ComplexRulesService } from '../../services/complex-rules.service';

export interface Condition {
  selectedProp: string;
  selectedCond: string;
  numericValue: number;
}

export interface Group {
  selectedRadio: string;
  conditions: Condition[];
  groups: Group[];
}

@Component({
  selector: 'json-builder',
  standalone: true,
  templateUrl: './json-builder.component.html',
  styleUrls: ['./json-builder.component.scss'],
})
export class JsonBuilderComponent implements OnInit {
  // STATIC JSON OBJECT FOR UI PURPOSES
  jsonData = {
    property: 'username',
    condition: 'equals',
    value: 'JohnDoe',
  };

  // Formats the JSON to be more readable
  get formattedJson() {
    return JSON.stringify(this.jsonData, null, 2);
  }

  ngOnInit(): void {}

  // CODE NOT FUNCTIONAL HOWEVER, THE LOGIC IS TECHNICALLY THERE :) knowing to push the json to the indexedDB i need
  // to instal an ngx-indexed db or create a native API
  // after installation of the ngx-indexed-db i need to call the service in my app and use .add to save the json
  // to get the json i need to use .getAll and to clear the db i need to use .clear
  // formattedJson: string = '';

  // constructor(@Inject(ComplexRulesService) private rulesService: ComplexRulesService) {}

  // ngOnInit(): void {
  //   this.rulesService.rulesChanged.subscribe(() => {
  //     this.buildJson();
  //   });
  //   this.buildJson();
  // }

  // buildJson(): void {
  //   const rules = this.rulesService.getRules();
  //   this.formattedJson = JSON.stringify(this.generateJson(rules), null, 2);
  // }

  // generateJson(groups: Group[]): any {
  //   if (!groups || groups.length === 0) {
  //     return {};
  //   }

  //   return {
  //     condition: groups[0].selectedRadio, // AND/OR
  //     rules: groups.map((group: Group) => {
  //       if (group.conditions && group.conditions.length > 0) {
  //         return group.conditions.map((condition: Condition) => ({
  //           field: condition.selectedProp,
  //           operator: condition.selectedCond,
  //           value: condition.numericValue,
  //         }));
  //       } else if (group.groups && group.groups.length > 0) {
  //         return {
  //           condition: group.selectedRadio,
  //           rules: this.generateJson(group.groups)
  //         };
  //       }
  //       return null; // Ensuring all paths return a value
  //     }).flat().filter(Boolean)
  //   };
  // }
}
