import { Injectable } from '@angular/core';

import { SessionStorageModel } from '../class/session-storage-model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

   sessionStorageModel : SessionStorageModel = new SessionStorageModel(); 

	public set(key:string,value:string){
	
		this.sessionStorageModel[key]=value;

	}

	get(key:string):string{

		//uncomment the following line after work is done
		return this.sessionStorageModel[key];
		//return "leeaanair@gmail.com";

	}

	remove(key:string){

		this.sessionStorageModel[key]=null;
	}

	clear(){

		this.sessionStorageModel=new SessionStorageModel();

	}
}
