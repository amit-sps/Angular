import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week4pComponent } from './week4p.component';

describe('Week4pComponent', () => {
  let component: Week4pComponent;
  let fixture: ComponentFixture<Week4pComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Week4pComponent]
    });
    fixture = TestBed.createComponent(Week4pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
