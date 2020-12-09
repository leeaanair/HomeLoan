import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feat-calc-doc-component',
  templateUrl: './feat-calc-doc-component.component.html',
  styleUrls: ['./feat-calc-doc-component.component.css']
})
export class FeatCalcDocComponentComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
