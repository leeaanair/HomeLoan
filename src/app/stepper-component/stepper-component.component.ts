import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatStepperModule } from '@angular/material/stepper'; 
import { MatInputModule } from '@angular/material/input'; 

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
   constructor(private _formBuilder: FormBuilder) {}

   ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
         firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
         secondCtrl: ['', Validators.required]
      });

       this.thirdFormGroup = this._formBuilder.group({
         thirdCtrl: ['', Validators.required]
      });

   }

}


