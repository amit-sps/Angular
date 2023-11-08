import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  verified: boolean;
}

@Component({
  selector: 'app-week2',
  templateUrl: './week2.component.html',
  styleUrls: ['./week2.component.css']
})
export class Week2Component {
  
  users: User[] = [
    { id: 1, name: 'Amit Thakur', email: 'amit@gmail.com', verified:false },
    { id: 2, name: 'Nashra Mirza', email: 'nashra@gmail.com', verified:true },
    { id: 3, name: 'Fazil Bhat', email: 'fazil@gmail.com',verified:true }
  ]
}
