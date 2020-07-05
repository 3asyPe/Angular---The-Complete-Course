import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPassword: boolean = false;
  logs: number[] = [];
  timesPressed: number = 0;

  changePasswordStatus(){
    this.showPassword = this.showPassword ? false : true;
    this.timesPressed++;
    this.logs.push(this.timesPressed);
  }

  getBackgroundColor(log: number): string{
    return log >= 5 ? "blue" : "none";
  }
}
