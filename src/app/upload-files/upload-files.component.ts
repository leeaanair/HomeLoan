import { Component, OnInit } from '@angular/core';
import { FilesArrayService } from '../services/files-array.service';

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent {

  selectedFiles: FileList;

  filesArrayClean : File[];

  constructor(public filesArrayService: FilesArrayService) { 

    this.filesArrayClean = [];
  }

  //on change
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  //on clicking upload
  upload(num) {

    //adding that file in the array
    this.filesArrayService.files[num] = this.selectedFiles.item(0);

    this.filesArrayClean = this.filesArrayService.files.filter(i => i!== null);

    console.log(this.selectedFiles.item(0).name);

    this.selectedFiles = undefined;
  }
}