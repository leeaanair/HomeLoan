import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetUserService } from '../services/get-user.service';
import { AdminLoginServiceService } from '../services/adminlogin-service.service';
import { Loan } from '../class/loan';




declare const  randomNumber: any;
@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.css'],

})
export class AdminVerificationComponent implements OnInit {

  appid:string;
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
  grantableAmount : number;

  randomNumber:any;


  adminForm : FormGroup;
  accountNumberControl : FormControl;
  grantAmountControl : FormControl;
  statusControl : FormControl;
  
  loan : Loan;

  statusDisabled : boolean;

  constructor(private activatedRouter : ActivatedRoute, private router: Router, formBuilder : FormBuilder, public getUserService : GetUserService, public adminLoginServiceService : AdminLoginServiceService) {
  
  this.appid="1000";
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

  this.grantableAmount = 0;
  this.statusDisabled = false;


    this.accountNumberControl = new FormControl();
    this.statusControl = new FormControl();


  this.adminForm = new FormGroup({


    accountNumberControl : this.accountNumberControl,
    statusControl : this.statusControl


  });

    this.loan = new Loan();


   }

  ngOnInit(): void {


    this.getUserService.getUser(this.getUserService.applicationId).subscribe(result=>this.setValues(result));

  }

  generate(){
    this.randomNumber = Math.floor(1000000000+ Math.random() * 9000000000);
    return 0;
  }


  setValues(result){

    this.appid = result.loan.applicationId;
    this.firstName = result.customer.fname;
    this.middleName = result.customer.mname;
    this.lastName = result.customer.lname;
    this.email = result.loan.emailIdLoan;
    this.address= result.customer.address;
    this.dateOfBirth= result.customer.dateOfBirth;
    this.phoneNumber=result.customer.phoneNumber;
    this.gender=result.customer.gender;
    this.aadharcard=result.customer.aadhaar;
    this.nationality=result.customer.nationality;
    this.loanAmount=result.loan.loanAmount;
    this.tenure=result.loan.tenure;
    this.propertyLocation=result.propertyDetails.propertyLocation;
    this.propertyName=result.propertyDetails.propertyName;
    this.eamount=result.propertyDetails.estimatedAmount;
    this.emptype=result.employmentDetails.employmentType;
    this.employername=result.employmentDetails.employerName;
    this.rAge=result.employmentDetails.retirementAge;
    this.salary=result.employmentDetails.monthlySalary;
    this.pancard=result.customer.pancard;


    this.grantableAmount = (this.salary*0.6)*60;
    if(this.grantableAmount < this.loanAmount){

        console.log("it's a false");

        this.statusDisabled = true;

    }

    else{

      console.log("it's a true");
    }

  }

  onClick(file){

          this.getUserService.getPDF(this.getUserService.applicationId, file).subscribe(result => {

            var fileURL: any = URL.createObjectURL(result);
            window.open(fileURL);
      })
 

  }

  onSubmit(){


    console.log("the generated account number was " + this.randomNumber);

    this.loan.applicationId = this.appid;

    if(this.statusDisabled){

      this.loan.applicationStatus = 'rejected';
    }

    else{

    console.log("the generated accountNumber is " + this.randomNumber);
    this.loan.applicationStatus = this.adminForm.get('statusControl').value;
    this.loan.accountNumber = this.randomNumber;
    this.loan.balance = this.loanAmount;



//(1+R)^n

    var rate = 8.5/(12*100);
    var top = Math.pow((1 + rate), (this.tenure*12));
 // //(1+R)^n - 1   
    var bottom = top-1;
    var sp = top / bottom;
    //P*R*sp(calculated above)
    this.loan.calculatedEmi = ((this.loanAmount * rate) * sp);
    console.log("loan is " + this.loan.calculatedEmi);

    //this.loan.calculatedEmi = this.loanAmount*8.5*(Math.pow(1+8.5, this.tenure*12)/((Math.pow(1+8.5, this.tenure*12))-1))


    }


    this.adminLoginServiceService.adminVerify(this.loan).subscribe(result => this.getResult(result));


  }

  getResult(result){

    if(result === 1){

      alert("Loan status was successfully changed");

    }

        this.router.navigate(['/admindashboard']);

  }
    

}
