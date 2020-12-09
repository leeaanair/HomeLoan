import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmiCalComponent } from './emi-cal.component';
import { Route, RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSliderModule
  ],
  declarations: [EmiCalComponent],
  exports: [EmiCalComponent]
})
export class EmiCal { }
