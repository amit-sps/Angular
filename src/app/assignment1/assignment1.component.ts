import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  todayDate: string | undefined;
  message: string[] = ["Oops!", "Wow!", "Oh no!", "Yikes!", "Nice!", "Oh wow!"];


  constructor(){}
  
  ngOnInit(): void {
   this.todayDate=new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'});
  }


  clickMe():void{
    alert(this.message[Math.floor(Math.random() * this.message.length)]);
  }

}
