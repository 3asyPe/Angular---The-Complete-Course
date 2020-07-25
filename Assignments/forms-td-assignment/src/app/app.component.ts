import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("form", {static: false}) myForm: NgForm;
  subType = "advanced";
  submitted = false;

  user: {email: string, subscriptionType: string, password: string};

  onSubmit(){
    this.user = {
      email: this.myForm.value.email,
      subscriptionType: this.myForm.value.subType,
      password: this.myForm.value.password
    };
    this.submitted = true;
    console.log(this.user);
  }
}
