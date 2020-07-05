import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string = "";
  allowResetButton = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkUsername(){
    if(this.username === ""){
      this.allowResetButton = false;
    }
    else{
      this.allowResetButton = true;
    }
  }

  resetUsername(){
    this.username = "";
  }
}
