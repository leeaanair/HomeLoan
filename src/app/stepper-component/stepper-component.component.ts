import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatInputModule } from '@angular/material/input'; 
import {MatRadioModule} from '@angular/material/radio';
//Step 1 - import library
import { Router } from '@angular/router';


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

	employment: Employment[] = [
    {value: 'salaried', display: 'Salaried'},
    {value: 'Self-Employeed', display: 'Self-Employeed'},
  ];

   title = 'materialApp';   
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   thirdFormGroup: FormGroup;
   fourthFormGroup: FormGroup;
   // anoControl : FormControl;
   // pnoControl : FormControl;
   
  //Find the constructor and add the statement - public router: Router
   constructor(private _formBuilder: FormBuilder,public router: Router) {
     

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
         salaryControl: ['', Validators.required],
         orgnameControl: ['', Validators.required],

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
         phonenoControl: ['', Validators.required,],
         addressControl: ['', Validators.required,]

        // anoControl:['', Validators.required,Validators.max(999999999999),Validators.min(100000000000)],
        //pnoControl:['', Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("[a-zA-Z ]*")]
      });

   }

}


