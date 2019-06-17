import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class LoginData {
  public nummer: string;
  public wachtwoord: string;

  getData() {
    return {
      pattientnummer: this.nummer,
      wachtwoord: this.wachtwoord,
    };
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData: LoginData = new LoginData();

  constructor(private router: Router) {}

  ngOnInit() {}

  //login function
  login() {
    //get data by calling this.loginData.getData()
  }
}
