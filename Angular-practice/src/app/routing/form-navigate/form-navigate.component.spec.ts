import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavigateComponent } from './form-navigate.component';

describe('FormNavigateComponent', () => {
  let component: FormNavigateComponent;
  let fixture: ComponentFixture<FormNavigateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNavigateComponent]
    });
    fixture = TestBed.createComponent(FormNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
