import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../class/customer';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customerUrl: string;
  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.customerUrl = 'http://localhost:8080/customer';
    this.loginUrl = 'http://localhost:8080/loginuser';

  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customerUrl, customer);
  }

    public login(customer: Customer) {
    return this.http.post<Customer>(this.loginUrl, customer);
  }


}
