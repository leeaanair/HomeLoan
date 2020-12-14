import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';



import { GetUserService } from '../services/get-user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

	applicationIdArray : string[];

  constructor(public getUserService : GetUserService, private router: Router) {

  	this.applicationIdArray = [];
   }

  ngOnInit(): void {

  	this.getUserService.getUsers().subscribe(result => (this.applicationIdArray = result));

  }


  getUser(id){
    this.getUserService.applicationId = id;
  	this.router.navigate(['/adminverification']);
  }

}
