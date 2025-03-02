import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComplexConditionsComponent } from '../../components/complex-conditions/complex-conditions.component';
import { ComplexRulesComponent } from '../../components/complex-rules/complex-rules.component';
import { JsonBuilderComponent } from '../../components/json-builder/json-builder.component';

@Component({
  selector: 'app-conditions-builder',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ComplexConditionsComponent,
    ComplexRulesComponent,
    JsonBuilderComponent,
  ],
  templateUrl: './conditions-builder.component.html',
  styleUrl: './conditions-builder.component.scss',
})
export class ConditionsBuilderComponent implements OnInit {
  ngOnInit(): void {}
}
