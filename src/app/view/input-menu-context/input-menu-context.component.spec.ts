import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMenuContextComponent } from './input-menu-context.component';

describe('InputMenuContextComponent', () => {
  let component: InputMenuContextComponent;
  let fixture: ComponentFixture<InputMenuContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMenuContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMenuContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
