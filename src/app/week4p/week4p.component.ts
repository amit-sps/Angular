import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-week4p',
  templateUrl: './week4p.component.html',
  styleUrls: ['./week4p.component.css'],
})
export class Week4pComponent implements OnInit {
  constructor(private readonly http: HttpClient, private readonly user:UsersService) {}
  data: any = [];
  searchByEmail: string = '';

  ngOnInit(): void {
    // this.http.get<any>('https://dummyjson.com/users?limit=30').subscribe(
    //   (response) => {
    //     this.data = response?.users;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.user.getUsersFromHttp().subscribe(response=>{
     this.data= response?.users
    })
  }
}
