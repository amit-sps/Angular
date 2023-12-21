import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { LoginComponent } from './login/login.component';
import { ProductsaleComponent } from './sales/productsale/productsale.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Week2Component } from './week2/week2.component';
import { Week3Component } from './week3/week3.component';
import { Week4Component } from './week4/week4.component';
import { Week4pComponent } from './week4p/week4p.component';
import { Week5Component } from './week5/week5.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/week1',
    pathMatch: 'full',
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
  {
    path: 'week4p',
    component: Week4pComponent,
  },
  {
    path: 'week4',
    component: Week4Component,
  },
  {
    path: 'week5',
    component: Week5Component,
    canActivate: [AuthGuard]
  } ,
  {
    path: 'week5/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuard,RoleGuard]
  } 
  ,
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path:'sale',
    loadChildren:()=>import("./sales/module1.module").then((m)=>m.SalesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
