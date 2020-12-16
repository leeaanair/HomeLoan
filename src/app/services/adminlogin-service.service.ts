import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../class/admin';
import { Observable } from 'rxjs/Observable';
import { Loan } from '../class/loan';

@Injectable({
  providedIn: 'root'
})

export class AdminLoginServiceService {


    private loginUrl: string;
    private adminVerifyUrl : string;
  
    constructor(private http: HttpClient) {
      this.loginUrl = 'http://localhost:8080/adminlogin';
      this.adminVerifyUrl = 'http://localhost:8080/adminverification';
  
    }
  
  
    public login(admin: Admin) {
      return this.http.post(this.loginUrl, admin);
    }


    public adminVerify(loan : Loan){

    	return this.http.post(this.adminVerifyUrl, loan);	
    }



  
  
  }
  