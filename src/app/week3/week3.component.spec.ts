import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week3Component } from './week3.component';

describe('Week3Component', () => {
  let component: Week3Component;
  let fixture: ComponentFixture<Week3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Week3Component]
    });
    fixture = TestBed.createComponent(Week3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
