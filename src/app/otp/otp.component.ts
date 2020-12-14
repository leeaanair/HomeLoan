import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {

  otpForm : FormGroup;
  otpControl : FormControl;
  constructor(formBuilder : FormBuilder, private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit(): void {
    this.otpForm = new FormGroup({
      
   });
  }

  sendOtp(){
    console.log("this was called")
  }

}
