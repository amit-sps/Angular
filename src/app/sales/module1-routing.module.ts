import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsaleComponent } from './productsale/productsale.component';

const routes: Routes = [
  {
    path: '',
    component:ProductsaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
