import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import {SessionService} from '../services/session.service';
import { Customer } from '../class/customer';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {


  customer: Customer;
  isUserLoggedIn:boolean = false;
  constructor(public router: Router, private SessionService:SessionService, public loginService:AuthenticationService) { }  


  ngOnInit(): void {


    this.isUserLoggedIn=this.loginService.isUserLoggedIn();
    
  }

}
