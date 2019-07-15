import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDateRangeComponent } from './ngx-date-range.component';

describe('NgxDateRangeComponent', () => {
  let component: NgxDateRangeComponent;
  let fixture: ComponentFixture<NgxDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
