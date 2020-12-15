import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../class/admin';
import { ActivatedRoute, Router } from '@angular/router';

import{AdminLoginServiceService} from '../services/adminlogin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  // Variables
  isLoginRight = 1; 

  admin: Admin;
  adminloginForm : FormGroup;
    
    adminemailControl : FormControl;
    adminpasswordControl : FormControl;
   
  constructor(formBuilder : FormBuilder,private route: ActivatedRoute, 
    private router: Router, private adminService: AdminLoginServiceService) {

      this.admin = new Admin();
    
  this.adminemailControl = new FormControl("");
  this.adminpasswordControl = new FormControl("");
  
  this.adminloginForm = new FormGroup({
    adminemailControl: this.adminemailControl,
    adminpasswordControl : this.adminpasswordControl
  });
   }

  ngOnInit(): void {
  }
onadminLogin(){

  console.log("this was called");
  console.log(this.adminloginForm.get("adminemailControl").value);
  this.admin.username = this.adminloginForm.get("adminemailControl").value;
  this.admin.password = this.adminloginForm.get("adminpasswordControl").value;
  this.adminService.login(this.admin).subscribe(result => this.gotoUserList(result));
  console.log("this was ended");

}

gotoUserList(result) {



  if(result==2){
  sessionStorage.setItem('username',  this.admin.username);
  this.router.navigate(['/admindashboard']);


}

else{
  this.isLoginRight = 0;
}
}

}
