import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week2Component } from './week2.component';

describe('Week2Component', () => {
  let component: Week2Component;
  let fixture: ComponentFixture<Week2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Week2Component]
    });
    fixture = TestBed.createComponent(Week2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
