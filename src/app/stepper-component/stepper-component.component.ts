import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatInputModule } from '@angular/material/input'; 
import {MatRadioModule} from '@angular/material/radio';
import { Router } from '@angular/router';


//import classes
import { Customer } from '../class/customer';
import { Loan } from '../class/loan';
import { EmploymentDetails } from '../class/employmentDetails';
import { PropertyDetails } from '../class/propertyDetails';
import { EmbeddedKey } from '../class/embeddedKey';
import { Application } from '../class/application';


import { UploadDataService } from '../services/upload-data.service';
import { SessionService } from '../services/session.service';
import { FilesArrayService } from '../services/files-array.service';


export interface Employment {
   value: string;
   display: string;
}

@Component({
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrls: ['./stepper-component.component.css']
})
export class StepperComponentComponent implements OnInit {

    //define classes
      customer : Customer;
      loan : Loan;
      employmentDetails : EmploymentDetails;
      propertyDetails : PropertyDetails;
      embeddedKey : EmbeddedKey;

      //class that will have all other class
      application : Application;


      //this will be used for sending both data and files
      formdata : FormData;

	employment: Employment[] = [
    {value: 'salaried', display: 'Salaried'},
    {value: 'Self-Employeed', display: 'Self-Employeed'},
  ];


   title = 'materialApp';   
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   thirdFormGroup: FormGroup;
   fourthFormGroup: FormGroup;
   
  //Find the constructor and add the statement - public router: Router
   constructor(private _formBuilder: FormBuilder,public router: Router, public uploadDataService: UploadDataService, public sessionService: SessionService, public filesArrayService : FilesArrayService) {


    //create objects
    this.application = new Application();
    this.customer = new Customer();
    this.loan = new Loan();
    this.employmentDetails = new EmploymentDetails();
    this.propertyDetails = new PropertyDetails();
    this.embeddedKey = new EmbeddedKey();
    this.formdata = new FormData();


   }

   ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
         plocationControl: ['', Validators.required],
         pnameControl: ['', Validators.required],
         amountControl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
         emptypeControl: ['', Validators.required],
         retireageControl: ['', Validators.required],
         orgnameControl: ['', Validators.required],
         salaryControl: ['', Validators.required],
      });

       this.thirdFormGroup = this._formBuilder.group({
         tenureControl: ['', Validators.required],
         loanamtControl: ['', Validators.required]
      });
      this.fourthFormGroup = this._formBuilder.group({
         nationalityControl: ['', Validators.required],
         anoControl: ['', Validators.required,],
         pnoControl: ['', Validators.required],
         dobControl: ['', Validators.required],
         genderControl: ['', Validators.required],
         addressControl: ['', Validators.required],
         phoneControl: ['', Validators.required],

      });

   }

    Submit(){

      //adding data in customer object
      // console.log(this.sessionService.get("UserId"));
      
      this.customer.nationality = this.fourthFormGroup.value.nationalityControl;
      this.customer.aadhaar = this.fourthFormGroup.value.anoControl;
      this.customer.pancard = this.fourthFormGroup.value.pnoControl;
      this.customer.dateOfBirth = this.fourthFormGroup.value.dobControl;
      this.customer.gender = this.fourthFormGroup.value.genderControl;
      this.customer.phoneNumber = this.fourthFormGroup.value.phoneControl;
      this.customer.address = this.fourthFormGroup.value.addressControl;

      console.log(this.customer.dateOfBirth);
      console.log(this.customer.phoneNumber);

      //adding data in loan object
      this.loan.loanAmount = this.thirdFormGroup.value.loanamtControl;
      this.loan.tenure = this.thirdFormGroup.value.tenureControl;


      console.log(this.loan.loanAmount);

      //addin dta in employment objects
      this.employmentDetails.employmentType = this.secondFormGroup.value.emptypeControl;
      this.employmentDetails.retirementAge = this.secondFormGroup.value.retireageControl;
      this.employmentDetails.employerName = this.secondFormGroup.value.orgnameControl;
      this.employmentDetails.monthlySalary = this.secondFormGroup.value.salaryControl;


      this.propertyDetails.propertyLocation = this.firstFormGroup.value.plocationControl;
      this.propertyDetails.propertyName = this.firstFormGroup.value.pnameControl;
      this.propertyDetails.estimatedAmount = this.firstFormGroup.value.amountControl;

      this.embeddedKey.emailId = sessionStorage.getItem("username");


      this.application.customer = this.customer;
      this.application.loan = this.loan;
      this.application.employmentDetails = this.employmentDetails;
      this.application.propertyDetails = this.propertyDetails;
      this.application.embeddedKey = this.embeddedKey;

      this.formdata.append('pan', this.filesArrayService.files[0]);
      this.formdata.append('voter', this.filesArrayService.files[1]);
      this.formdata.append('salary', this.filesArrayService.files[2]);
      this.formdata.append('loa', this.filesArrayService.files[3]);
      this.formdata.append('noc', this.filesArrayService.files[4]);
      this.formdata.append('buildernoc', this.filesArrayService.files[5]);
      this.formdata.append('builderagree', this.filesArrayService.files[6]);
      this.formdata.append('agree', this.filesArrayService.files[7]);





      const userBlob = new Blob([JSON.stringify(this.application)], {type : 'application/json'});
      this.formdata.append('application', userBlob);


      this.uploadDataService.uploadData(this.formdata).subscribe(result => this.gotoUserList(result));

            
    }

    gotoUserList(result){

        console.log(result);

        alert("Your application id is "+result+". Please note it for future use");

        this.router.navigate(['/userdashboard']);


    }


}