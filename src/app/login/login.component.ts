import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm : FormGroup;
    
    email1Control : FormControl;
    password1Control : FormControl;
   
  constructor(formBuilder : FormBuilder) {
    
  this.email1Control = new FormControl("",Validators.required);
  this.password1Control = new FormControl("",Validators.required);
  
  this.loginForm = new FormGroup({
    firstName: new FormControl()
  });
   }

  ngOnInit(): void {
  }
onLogin(){

}
}
