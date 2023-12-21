import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsaleComponent } from './productsale.component';

describe('ProductsaleComponent', () => {
  let component: ProductsaleComponent;
  let fixture: ComponentFixture<ProductsaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsaleComponent]
    });
    fixture = TestBed.createComponent(ProductsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
