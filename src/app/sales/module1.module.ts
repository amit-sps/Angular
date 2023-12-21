import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsaleComponent } from './productsale/productsale.component';
import { FormsModule } from '@angular/forms';
import { SalesRoutingModule } from './module1-routing.module';



@NgModule({
  declarations: [
    ProductsaleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SalesRoutingModule
  ],
  exports: [
    ProductsaleComponent,
  ],
})
export class SalesModule { }
