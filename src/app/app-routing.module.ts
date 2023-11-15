import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Week2Component } from './week2/week2.component';
import { Week3Component } from './week3/week3.component';

const routes: Routes = [
  {
    path: '',
    component: Assignment1Component,
  },
  {
    path: 'week1',
    component: Assignment1Component,
  },
  {
    path: 'week2',
    component: Week2Component,
  },
  {
    path: 'week3',
    component: Week3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
