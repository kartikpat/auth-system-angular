import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
  	event.preventDefault()
  	const target = event.target
  	const userName = target.querySelector('#username').value
  	const password = target.querySelector('#password').value

  	const data = this.Auth.getUserDetails(userName, password)
  	if(data.status) {
  		this.router.navigate([""])
  		this.Auth.setLoggedIn(true)
  	}
  	else {
  		window.alert("not authorized")
  	}
  }
}
