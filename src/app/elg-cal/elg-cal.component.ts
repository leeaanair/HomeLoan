import { Component, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-elg-cal',
  templateUrl: './elg-cal.component.html',
  styleUrls: ['./elg-cal.component.css']
})
export class ElgCalComponent implements AfterViewInit {

  constructor() { }


 monthlyincome:number;

 public test=0;
 public result: number;
 public income:number;

 
  ngAfterViewInit(): void {
    this.update();
  }

  rupdate()
  {
   this.test=this.monthlyincome;
   this.update();
  }
  update(){
    this.test=(this.test*0.6)*60;
    //this.income = this.monthlyincome;
    //var elg = 60*(0.6*this.income);
    //this.result=this.income;
  }

}
