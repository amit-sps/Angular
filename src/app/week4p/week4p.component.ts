import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week4p',
  templateUrl: './week4p.component.html',
  styleUrls: ['./week4p.component.css'],
})
export class Week4pComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}
  data: any = [];

  ngOnInit(): void {
    this.http.get<any>('https://dummyjson.com/users?limit=30').subscribe(
      (response) => {
        this.data = response?.users;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
