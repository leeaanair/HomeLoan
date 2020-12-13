import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../class/admin';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class AdminLoginServiceService {


    private loginUrl: string;
  
    constructor(private http: HttpClient) {
      this.loginUrl = 'http://localhost:8080/adminlogin';
  
    }
  
  
      public login(admin: Admin) {
      return this.http.post<Admin>(this.loginUrl, admin);
    }
  
  
  }
  