import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week4Component } from './week4.component';

describe('Week4Component', () => {
  let component: Week4Component;
  let fixture: ComponentFixture<Week4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Week4Component]
    });
    fixture = TestBed.createComponent(Week4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
