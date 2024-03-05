import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanComponent } from './workout-plan.component';

describe('WorkoutPlanComponent', () => {
  let component: WorkoutPlanComponent;
  let fixture: ComponentFixture<WorkoutPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPlanComponent]
    });
    fixture = TestBed.createComponent(WorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
