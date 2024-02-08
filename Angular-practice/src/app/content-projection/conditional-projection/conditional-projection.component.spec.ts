import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalProjectionComponent } from './conditional-projection.component';

describe('ConditionalProjectionComponent', () => {
  let component: ConditionalProjectionComponent;
  let fixture: ComponentFixture<ConditionalProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalProjectionComponent]
    });
    fixture = TestBed.createComponent(ConditionalProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
