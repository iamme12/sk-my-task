import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexRulesComponent } from './complex-rules.component';

describe('ComplexRulesComponent', () => {
  let component: ComplexRulesComponent;
  let fixture: ComponentFixture<ComplexRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplexRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
