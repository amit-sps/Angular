import { Injectable } from '@angular/core';
import { GET_USER } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: GET_USER[] = [
    { id: 1, name: 'Amit Thakur', email: 'amit@gmail.com', verified:false },
    { id: 2, name: 'Nashra Mirza', email: 'nashra@gmail.com', verified:true },
    { id: 3, name: 'Fazil Bhat', email: 'fazil@gmail.com',verified:true }
  ]

  constructor() { }

  getUsers():GET_USER[]{
    return this.users;
  }
}
