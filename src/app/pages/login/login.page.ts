import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';

class LoginData {
  public nummer: number;
  public wachtwoord: string;

  getData() {
    return {
      patientnummer: this.nummer,
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

  constructor(
    private router: Router,
    private data: DataService,
    private db: AngularFirestore,
  ) {}

  ngOnInit() {}

  //login function
  login() {
    //get data by calling this.loginData.getData()
    var data = this.loginData.getData();

    this.data.login(data.patientnummer);
  }
}
