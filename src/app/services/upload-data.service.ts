import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Application } from '../class/application';

import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UploadDataService {

  private uploadFilesData : string;
  private getPDFurl : string;

  constructor(private http: HttpClient) {
    // this.uploadDataUrl = 'http://localhost:8080/uploadApplication';
    this.getPDFurl = "http://localhost:8080/getPDF";
    this.uploadFilesData = 'http://localhost:8080/uploadApplication2';


  }

  public uploadData(formdata : FormData){

    return this.http.post(this.uploadFilesData, formdata,  {responseType: 'text'});


  }

  //fetching file 

getPDF(id, name): Observable<any>
{
    return this.http.get(this.getPDFurl+"/"+id+"/"+name, {responseType: 'blob'});
  
  }

}