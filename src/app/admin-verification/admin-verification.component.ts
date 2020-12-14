import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

declare const  randomNumber: any;
@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.css'],

})
export class AdminVerificationComponent implements OnInit {
  appid:number;
  firstName:string;
  middleName:string;
  lastName:string;
  email:string;
  address:string;
  dateOfBirth:string;
  phoneNumber:string;
  gender:string;
  aadharcard:string;
  nationality:string;
  loanAmount:number;
  tenure:number;
  propertyLocation:string;
  propertyName:string;
  eamount:number;
  emptype:string;
  employername:string;
  rAge:number;
  salary:number;
  pancard:string;

  randomNumber:any;

    adminForm : FormGroup;
    accountNumberControl : FormControl;
    grantAmountControl : FormControl;
    statusControl : FormControl;
    


  constructor(private router: Router, formBuilder : FormBuilder) {
  this.appid=1000;
  this.firstName="xyz";
  this.middleName="abc";
  this.lastName="abc";
  this.email="xyz.abc@gmail.com";
  this.address="Mumbai maharashtra";
  this.dateOfBirth="12 Dec 1999";
  this.phoneNumber="1234567890";
  this.gender="female";
  this.aadharcard="123456789123";
  this.nationality="Indian";
  this.loanAmount=100000;
  this.tenure=10;
  this.propertyLocation="dhdfk";
  this.propertyName="fjdf";
  this.eamount=20000;
  this.emptype="self";
  this.employername="LTI";
  this.rAge=60;
  this.salary=20000;
  this.pancard="asdf122334scsd";

  this.adminForm = new FormGroup({
    
 });
   }

  ngOnInit(): void {
  }

  generate(){
    this.randomNumber = Math.floor(1000000000+ Math.random() * 9000000000);
    //console.log(this.randomNumber);
  }

  onSubmit(){

  }
  reset1(){
    this.adminForm.reset(this.adminForm.value);
  }
  
  onClick(){
    
  }

}
