import { Component } from '@angular/core';

interface UserForm {
  fName: string;
  lName: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-week3',
  templateUrl: './week3.component.html',
  styleUrls: ['./week3.component.css'],
})
export class Week3Component {
  Users: UserForm[] = [];
  user : UserForm = {
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  }


  onSubmit() {
    this.Users.push({...this.user})
  }
}
