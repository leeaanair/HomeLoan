import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  regForm : FormGroup;
  firstnameControl : FormControl;
  middlenameControl : FormControl;
  lastnameControl : FormControl;
  emailControl : FormControl;
  passwordControl : FormControl;
  confirmpasswordControl : FormControl;
  nationalityControl : FormControl;
  anoControl : FormControl;
  pnoControl : FormControl;
  mobilenoControl : FormControl;
  genderControl : FormControl;
  dateControl : FormControl;
  
  constructor(formBuilder : FormBuilder) {
    this.firstnameControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
    this.middlenameControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.lastnameControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.emailControl = new FormControl("",Validators.compose([Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]));
  this.passwordControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(6)]));
  this.confirmpasswordControl = new FormControl("",Validators.required);
  this.nationalityControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.anoControl = new FormControl("",Validators.compose([Validators.required,Validators.max(999999999999),Validators.min(100000000000),Validators.pattern("[a-zA-Z ]*")]));
  this.pnoControl = new FormControl("",Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[a-zA-Z ]*")]));
  this.mobilenoControl = new FormControl("",Validators.compose([Validators.required,Validators.max(9999999999),Validators.min(1000000000),Validators.pattern("[a-zA-Z ]*")]));
  this.dateControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.genderControl = new FormControl("",Validators.required);
  this.regForm = new FormGroup({
    firstName: new FormControl()
  });

   }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
}
