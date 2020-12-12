import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {

  constructor(public router: Router, public sessionService : SessionService) { }

  ngOnInit(): void {
  }

  apply(){

      if(this.sessionService.get("UserId") != null){
        
          this.router.navigate(['/stepper']);

      }

      else{

          this.router.navigate(['/login']);

      }

  }

}
