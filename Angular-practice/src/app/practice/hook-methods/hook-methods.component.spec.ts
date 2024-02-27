import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookMethodsComponent } from './hook-methods.component';

describe('HookMethodsComponent', () => {
  let component: HookMethodsComponent;
  let fixture: ComponentFixture<HookMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HookMethodsComponent]
    });
    fixture = TestBed.createComponent(HookMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
