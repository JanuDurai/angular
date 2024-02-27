import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOutplanComponent } from './work-outplan.component';

describe('WorkOutplanComponent', () => {
  let component: WorkOutplanComponent;
  let fixture: ComponentFixture<WorkOutplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOutplanComponent]
    });
    fixture = TestBed.createComponent(WorkOutplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
