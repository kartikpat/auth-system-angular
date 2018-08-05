import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor() { }

  get isLoggedIn() {
  	return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString() )
  }

  setLoggedIn(value: boolean) {
  	this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true')
  }

  getUserDetails(username, password) {
    var data = {
      "status": false
    }
    if(username == "kartik" && password == "kartik") {
      data["status"] = true;
    }
  	return data
  }
}
