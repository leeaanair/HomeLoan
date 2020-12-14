import { Component, OnInit } from '@angular/core';

import { UploadDataService } from '../services/upload-data.service';

import { GetUserService } from '../services/get-user.service';

@Component({
  selector: 'app-show-file',
  templateUrl: './show-file.component.html',
  styleUrls: ['./show-file.component.css']
})
export class ShowFileComponent implements OnInit {

  constructor(public uploadDataService : UploadDataService, public getUserService: GetUserService) {
   }

  ngOnInit(): void {
  }


  


  	getPDF(){

  		this.uploadDataService.getPDF('V04rpvsncA', 'PAN').subscribe(result => {

  			    var fileURL: any = URL.createObjectURL(result);
  			    window.open(fileURL);
  		})


    //  this.getUserService.getUser('V04rpvsncA').subscribe(result => console.log(result));

  	}

}
