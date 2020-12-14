import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  
  constructor(formBuilder: FormBuilder) {
    this.emailControl = new FormControl("", Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]));
    this.applicationControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)]));

  }

  onSubmit() {

  }
}
