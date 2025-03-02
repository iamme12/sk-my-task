import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsBuilderComponent } from './conditions-builder.component';

describe('ConditionsBuilderComponent', () => {
  let component: ConditionsBuilderComponent;
  let fixture: ComponentFixture<ConditionsBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
