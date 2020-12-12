import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


//for storing array of all files
export class FilesArrayService {

  public files: File[];


  constructor(private http : HttpClient){


  	this.files = [];

  }

}

