import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loan-tracker',
  templateUrl: './loan-tracker.component.html',
  styleUrls: ['./loan-tracker.component.css']
})
export class LoanTrackerComponent implements OnInit{

  regForm: FormGroup;
  mobilenoControl: FormControl;
  emailControl: FormControl;
  currentStep: number = 0;// This will have value of application_status , value starts from 0 to 2.
  processing:Boolean;

  
  constructor(formBuilder: FormBuilder) {
    this.emailControl = new FormControl("", Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]));
    this.mobilenoControl = new FormControl("", Validators.compose([Validators.required, Validators.max(9999999999), Validators.min(1000000000), Validators.pattern("[a-zA-Z ]*")]));

  }

  ngOnInit(): void {
    this.processing = true;
    setTimeout(() => {
      this.currentStep = 1;   //directly giving the value 
      this.processing = false;
    }, 1500);
  }
  onSubmit() {

  }
}
