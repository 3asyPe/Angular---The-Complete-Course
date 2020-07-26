import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  projectForm: FormGroup;

  ngOnInit(){
    this.projectForm = new FormGroup({
      "projectName": new FormControl(null, Validators.required, this.forbiddentNames),
      "email": new FormControl(null, [Validators.email, Validators.required]),
      "projectStatus": new FormControl("stable")
    })
  }

  onSubmit(){
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }

  forbiddentNames(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === "Test"){
          resolve({"nameIsForbidden": true});
        }
        else{
          resolve(null);
        }
      },1000);
    });
    return promise;
  }
}
