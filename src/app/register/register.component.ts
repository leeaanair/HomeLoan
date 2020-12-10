import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

 regForm : FormGroup;
    firstnameControl : FormControl;
    lastnameControl : FormControl;
    emailControl : FormControl;
    passwordControl : FormControl;
    confirmpasswordControl : FormControl;

  constructor(formBuilder : FormBuilder) {
    this.firstnameControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.lastnameControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.emailControl = new FormControl("",Validators.compose([Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]));
  this.passwordControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(6)]));
  this.confirmpasswordControl = new FormControl("",Validators.required);
  this.regForm = new FormGroup({
    firstName: new FormControl()
  });

   }
  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
