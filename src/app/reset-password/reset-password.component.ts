import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Confirmation } from '../class/confirmation';
import { CustomerServiceService } from '../services/customer-service.service';

 
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

	resForm : FormGroup;
	passwordControl : FormControl;
    confirmpasswordControl : FormControl;

    confirmation : Confirmation;


    token : string;




  constructor(formBuilder : FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerServiceService) { 


  	 this.route.queryParams.subscribe(params => {
       this.token = params['token'];
        console.log(this.token); // Print the parameter to the console. 
    });

  this.passwordControl = new FormControl("",Validators.compose([Validators.required,Validators.minLength(6)]));
  this.confirmpasswordControl = new FormControl("",Validators.required);   

  this.resForm = new FormGroup({

    passwordControl : this.passwordControl,
    confirmpasswordControl : this.confirmpasswordControl

  
  });

  this.confirmation = new Confirmation();
 

  }


  onSubmit(){


  	this.confirmation.password = this.resForm.get("passwordControl").value;
  	this.confirmation.confirmationToken = this.token;
  	this.customerService.resetPassword(this.confirmation).subscribe(result => this.passwordReset(result));

  }


  passwordReset(result){

  	if(result === 1){

  		alert("Password was reset successfully");
      this.router.navigate(['/login']);

  	}
  	else{

  		alert("There was some error");
  	}

  }

  
}
