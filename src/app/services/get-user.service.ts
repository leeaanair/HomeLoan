import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Application } from '../class/application';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetUserService {

	private getUserUrl : string;
	private getUsersUrl: string;

	public applicationId : string;

  constructor(private http: HttpClient) { 

  	this.getUserUrl = "http://localhost:8080/getUser";
  	this.getUsersUrl = "http://localhost:8080/getUsers";
  	this.applicationId = "";

  }

	//get user based on application id
  	getUser(id): Observable<any>{

  		return this.http.get<Application>(this.getUserUrl+"/"+id);

  	}


  	getUsers(): Observable<any>{

  		return this.http.get(this.getUsersUrl);
  	}



}
