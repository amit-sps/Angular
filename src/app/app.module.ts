import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Week2Component } from './week2/week2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Week3Component } from './week3/week3.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { Week4pComponent } from './week4p/week4p.component';
import { HttpInterceptors } from './services/http.interceptor';
import { searchByEmailPipe } from './userslist/user-search-by-name.pipe';
import { Week4Component } from './week4/week4.component';
import { Week5Component } from './week5/week5.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SalesModule } from './sales/module1.module';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Week2Component,
    NavbarComponent,
    Week3Component,
    UserslistComponent,
    FooterComponent,
    Week4pComponent,
    searchByEmailPipe,
    Week4Component,
    Week5Component,
    UserDetailsComponent,
    LoginComponent,
    UnauthorizedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, SalesModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
