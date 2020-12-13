import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-app-status',
  templateUrl: './user-app-status.component.html',
  styleUrls: ['./user-app-status.component.css']
})
export class UserAppStatusComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
