import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxContextAreaComponent } from './ngx-context-area.component';

describe('NgxContextAreaComponent', () => {
  let component: NgxContextAreaComponent;
  let fixture: ComponentFixture<NgxContextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxContextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxContextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
