import { Injectable } from '@angular/core';
import {SessionService} from '../services/session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private sessionService: SessionService) { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
      console.log(user);
      console.log(!(user === null))
      return !(user === null)
     }
  
     logout() {
      sessionStorage.removeItem('username')
     }
}