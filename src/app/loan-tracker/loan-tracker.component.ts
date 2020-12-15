import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerServiceService } from '../services/customer-service.service';

import { Loan } from '../class/loan';


@Component({
  selector: 'app-loan-tracker',
  templateUrl: './loan-tracker.component.html',
  styleUrls: ['./loan-tracker.component.css']
})
export class LoanTrackerComponent{

  regForm: FormGroup;
  applicationControl: FormControl;
  emailControl: FormControl;
  currentStep: number = 0;// This will have value of application_status , value starts from 0 to 2.
  processing:Boolean;
  loan : Loan;

  status : string;
  balance : number;
  emi : number;
  accountNumber : string;


  statusAppears : boolean;
  balanceAppears : boolean;




  
  constructor(formBuilder: FormBuilder, public customerServiceService : CustomerServiceService, private route: ActivatedRoute, private router: Router) {


    this.emailControl = new FormControl("", Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]));
    this.applicationControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)]));
    
    this.regForm = new FormGroup({

      emailControl : this.emailControl,
      applicationControl : this.applicationControl
     });



    this.loan = new Loan();
    this.statusAppears = false;
    this.balanceAppears = false;

    this.status = "";
    this.balance = 0;
    this.emi = 0;
    this.accountNumber = "";

  }

  onSubmit() {

    this.loan.emailId = this.regForm.get("emailControl").value;
    this.loan.applicationId = this.regForm.get("applicationControl").value;

    this.customerServiceService.seeStatus(this.loan.applicationId, this.loan.emailId).subscribe(result => this.showStatus(result));   


  }

  showStatus(result){

    this.statusAppears = true;
    console.log(result);

    if(result.applicationStatus === "approved"){

      this.balanceAppears = true;
      this.status = "accepted";
      this.balance = result.balance;
      this.emi = result.calculatedEmi;
      this.accountNumber = result.accountNumber;
    }

    else{

      this.status = result.applicationStatus;
    }

  }


}
