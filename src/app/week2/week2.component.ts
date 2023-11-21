import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { GET_USER } from '../interfaces/users.interfaces';


@Component({
  selector: 'app-week2',
  templateUrl: './week2.component.html',
  styleUrls: ['./week2.component.css']
})
export class Week2Component {
  constructor(
    private readonly UserService:UsersService
  ){}
  
  users: GET_USER[] = this.UserService.getUsers();
}
