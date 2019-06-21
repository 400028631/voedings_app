import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

class LoginData {
  public nummer: string;
  public wachtwoord: string;

  getData() {
    return {
      patientnummer: this.nummer,
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

  constructor(private router: Router, private data: DataService) {}

  ngOnInit() {}

  //login function
  login() {
    //get data by calling this.loginData.getData()
    var data = this.loginData.getData();
    this.data.Login(data.patientnummer, data.wachtwoord);
  }
}
