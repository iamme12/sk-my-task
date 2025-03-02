import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexConditionsComponent } from './complex-conditions.component';

describe('ComplexConditionsComponent', () => {
  let component: ComplexConditionsComponent;
  let fixture: ComponentFixture<ComplexConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexConditionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplexConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
