import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { CustomerServiceService } from '../services/customer-service.service';
import { SessionService } from '../services/session.service';
// import { CustomerServiceService } from '../services/customer-service.service';

import { Customer } from '../class/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  customer : Customer;
  isLoginRight = 1; 


    loginForm : FormGroup;
    
    email1Control : FormControl;
    password1Control : FormControl;
   
  constructor(formBuilder : FormBuilder, private route: ActivatedRoute, 
      private router: Router, private customerService: CustomerServiceService, public sessionService : SessionService ) {

      this.customer = new Customer();

    
  this.email1Control = new FormControl("",Validators.required);
  this.password1Control = new FormControl("",Validators.required);
  
  this.loginForm = new FormGroup({
    email1Control: this.email1Control,
    password1Control : this.password1Control

  });
   }

  ngOnInit(): void {
  }

    onLogin(){

        console.log("this was called");
        this.customer.emailId = this.loginForm.get("email1Control").value;
        this.customer.password = this.loginForm.get("password1Control").value;
        this.customerService.login(this.customer).subscribe(result => this.gotoUserList(result));

}

  gotoUserList(result) {

      if(result==2){
        sessionStorage.setItem('username', this.customer.emailId);
        alert("Successfully Logged in");
        this.router.navigate(['/userdashboard']);

    }
    else{
      this.isLoginRight = 0;
    }
  }


  forgot(){
    this.router.navigate(['/forgot']);
  }

}
