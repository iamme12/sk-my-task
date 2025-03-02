import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComplexConditionsComponent } from '../complex-conditions/complex-conditions.component';

@Component({
  selector: 'complex-rules',
  standalone: true,
  imports: [FormsModule, CommonModule, ComplexConditionsComponent],
  templateUrl: './complex-rules.component.html',
  styleUrl: './complex-rules.component.scss',
})
export class ComplexRulesComponent implements OnInit {
  @ViewChild(ComplexConditionsComponent)
  conditionsComponent!: ComplexConditionsComponent;
  @Input() isFirstRule: boolean = true;
  @Input() selectedRadio: string = '';
  @Input() group: { id: number; selectedRadio: string } = {
    id: 0,
    selectedRadio: 'option1',
  }; // Group object passed from parent
  @Output() updateSelection = new EventEmitter<string>(); // Emit the selected radio value

  isMenuOpen = false;
  radioOptions = [
    { label: 'AND', value: 'option1' },
    { label: 'OR', value: 'option2' },
  ];
  groups: { id: number; selectedRadio: string }[] = [];

  constructor(private elementRef: ElementRef, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.isFirstRule) {
      this.selectedRadio = 'option1'; // Default first rule to "AND"
    }
  }

  ngAfterViewInit(): void {
    if (!this.conditionsComponent) {
      console.error('ComplexConditionsComponent not initialized!');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  addCondition() {
    console.log('Add Condition clicked');
    this.isMenuOpen = false;
    if (this.conditionsComponent) {
      this.conditionsComponent.addCondition();
    } else {
      console.error('ComplexConditionsComponent is undefined!');
    }
  }

  addGroup() {
    console.log('Add Group clicked');
    this.isMenuOpen = false;

    // Add new group with unique id and independent selectedRadio state
    const newGroup = { id: Date.now(), selectedRadio: 'option1' }; // Default to "AND"
    this.groups.push(newGroup);

    console.log(this.groups);
    this.cd.detectChanges();
  }

  removeGroup(index: number) {
    if (index < 0 || index >= this.groups.length) return; // Prevent invalid removals

    console.log('Remove Group clicked', index);

    // Remove the correct group
    this.groups.splice(index, 1);

    // Ensure UI updates properly
    this.cd.detectChanges();
  }

  updateGroupSelection(value: string) {
    // Emit the selected value when radio button is changed
    this.updateSelection.emit(value);
  }

  updateGroupSelectionFromChild(groupId: number) {
    // Handle the selection update based on groupId
    const updatedGroup = this.groups.find((group) => group.id === groupId);
    if (updatedGroup) {
      this.updateSelection.emit(updatedGroup.selectedRadio);
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}
