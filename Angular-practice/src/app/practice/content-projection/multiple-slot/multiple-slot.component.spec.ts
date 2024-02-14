import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSlotComponent } from './multiple-slot.component';

describe('MultipleSlotComponent', () => {
  let component: MultipleSlotComponent;
  let fixture: ComponentFixture<MultipleSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleSlotComponent]
    });
    fixture = TestBed.createComponent(MultipleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
