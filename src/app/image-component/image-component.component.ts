import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {

  
  constructor(public router: Router, config: NgbCarouselConfig, public sessionService : SessionService) {
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

  apply(){

      if(sessionStorage.getItem("username") != null){
        
          this.router.navigate(['/userdashboard']);

      }

      else{

          this.router.navigate(['/login']);

      }

  }

  }
