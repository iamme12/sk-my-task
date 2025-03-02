import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonBuilderComponent } from './json-builder.component';

describe('JsonBuilderComponent', () => {
  let component: JsonBuilderComponent;
  let fixture: ComponentFixture<JsonBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
