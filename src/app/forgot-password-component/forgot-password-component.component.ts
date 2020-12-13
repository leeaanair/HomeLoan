import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerServiceService } from '../services/customer-service.service';

import { ForgotPassword } from '../class/Password';



@Component({
  selector: 'app-forgot-password-component',
  templateUrl: './forgot-password-component.component.html',
  styleUrls: ['./forgot-password-component.component.css']
})
export class ForgotPasswordComponentComponent {

    emailControl : FormControl;
    forForm : FormGroup;
    forgotPassword1 : ForgotPassword;
    alert = 0;


  constructor(formBuilder : FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerServiceService) { 

  	  this.emailControl = new FormControl("",Validators.compose([Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]));

		  this.forForm = new FormGroup({

		    emailControl : this.emailControl
		  
		  });


		this.forgotPassword1 = new ForgotPassword();


  	}

  	onSubmit(){
  		this.forgotPassword1.emailId = this.forForm.get("emailControl").value; 
  		this.customerService.forgotPassword(this.forgotPassword1).subscribe(result => this.generateAlert(result));

  	}

  	generateAlert(result){

  		if(result == 0){
  			
  			this.alert = 2;	//email is not registered

  		}

  		else{

  			 this.alert = 1;	//email is registered

  		}

  	}
}
