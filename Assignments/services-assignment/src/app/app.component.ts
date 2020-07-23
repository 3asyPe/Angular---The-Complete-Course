import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  activeUsers = [];
  inactiveUsers = [];

  constructor(private usersService: UsersService){
    this.activeUsers = usersService.activeUsers;
    this.inactiveUsers = usersService.inactiveUsers;
  }

}
