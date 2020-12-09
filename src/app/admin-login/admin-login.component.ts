import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminloginForm : FormGroup;
    
    adminemailControl : FormControl;
    adminpasswordControl : FormControl;
   
  constructor(formBuilder : FormBuilder) {
    
  this.adminemailControl = new FormControl("",Validators.required);
  this.adminpasswordControl = new FormControl("",Validators.required);
  
  this.adminloginForm = new FormGroup({
    firstName: new FormControl()
  });
   }

  ngOnInit(): void {
  }
onadminLogin(){

}
}