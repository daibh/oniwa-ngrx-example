import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTrackingComponent } from './action-tracking.component';

describe('ActionTrackingComponent', () => {
  let component: ActionTrackingComponent;
  let fixture: ComponentFixture<ActionTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
