import { Component } from '@angular/core';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  rememberMe: boolean = false;
  username: string="";
  password: string="";

  constructor() { }

  login() {
    // Implement login logic here, e.g., send credentials to server
    // If "Remember Me" checkbox is checked, save user credentials in localStorage
    if (this.rememberMe) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
    }
  }
}
