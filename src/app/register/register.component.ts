import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerServiceService } from '../services/customer-service.service';

import { Customer } from '../class/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

	
	  customer : Customer;
    isRegisterRight = 1; 
	  regForm : FormGroup;
    firstnameControl : FormControl;
    lastnameControl : FormControl;
    middlenameControl : FormControl;
    emailControl : FormControl;
    passwordControl : FormControl;
    confirmpasswordControl : FormControl;

  constructor(formBuilder : FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerServiceService) {

  this.firstnameControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.middlenameControl = new FormControl("",Validators.compose([Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.lastnameControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]));
  this.emailControl = new FormControl("",Validators.compose([Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]));
  this.passwordControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(6)]));
  this.confirmpasswordControl = new FormControl("",Validators.required);    

	this.customer = new Customer();
  this.regForm = new FormGroup({

    firstnameControl: this.firstnameControl,
    lastnameControl : this.lastnameControl,
    middlenameControl : this.middlenameControl,
    emailControl : this.emailControl,
    passwordControl : this.passwordControl,
    confirmpasswordControl : this.confirmpasswordControl

  
  });

   }


  onSubmit(){


        console.log("this was called");
        this.customer.fname = this.regForm.get("firstnameControl").value;
        this.customer.mname = this.regForm.get("middlenameControl").value;
        this.customer.lname = this.regForm.get("lastnameControl").value;
        this.customer.emailId = this.regForm.get("emailControl").value;
        this.customer.password = this.regForm.get("passwordControl").value;
        this.customerService.save(this.customer).subscribe(result => this.gotoUserList(result));
  }

  gotoUserList(result) {

  //successfully registered
    if(result==2){
      this.router.navigate(['/']);   
      alert("Successfully registered in");
  

    }
    
    //already registered
    else{
      this.isRegisterRight = 0;
    }
  }

}
