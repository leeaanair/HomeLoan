import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authenticationService.logout();
    alert("Successfully Logged out");
    this.router.navigate(['/']);
  }

}