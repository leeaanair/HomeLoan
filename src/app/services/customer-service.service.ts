import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../class/customer';
import { ForgotPassword } from '../class/Password';

import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customerUrl: string;
  private loginUrl: string;
  private forgotPasswordUrl: string;

  constructor(private http: HttpClient) {
    this.customerUrl = 'http://localhost:8080/customer';
    this.loginUrl = 'http://localhost:8080/loginuser';
    this.forgotPasswordUrl = 'http://localhost:8080/forgotpassword';

  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customerUrl, customer);
  }

    public login(customer: Customer) {
    return this.http.post<Customer>(this.loginUrl, customer);
  }

    public forgotPassword(forgot: ForgotPassword){

      return this.http.post<ForgotPassword>(this.forgotPasswordUrl, forgot);

    }

}
