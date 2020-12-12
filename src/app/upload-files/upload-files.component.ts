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

  constructor(public filesArrayService: FilesArrayService) { 
  }

  //on change
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  //on clicking upload
  upload(num) {

    //adding that file in the array
    this.filesArrayService.files[num] = this.selectedFiles.item(0);

    this.selectedFiles = undefined;
  }
}