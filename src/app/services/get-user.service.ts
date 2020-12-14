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

  constructor(private http: HttpClient) { 

  	this.getUserUrl = "http://localhost:8080/getUser";
  	this.getUsersUrl = "http://localhost:8080/getUsers";

  }

	//get user based on application id
  	getUser(id): Observable<any>{

  		return this.http.get(this.getUserUrl+"/"+id, {responseType: 'text'});

  	}


  	getUsers(): Observable<any>{

  		return this.http.get(this.getUsersUrl);
  	}



}
