import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Application } from '../class/application';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetUserService {

	private getUserUrl : String
  constructor(private http: HttpClient) { 

  	this.getUserUrl = "http://localhost:8080/getUser";

  }

//get user based on application id
  	getUser(id): Observable<any>{

  		return this.http.get(this.getUserUrl+"/"+id, {responseType: 'text'});

  	}



}
