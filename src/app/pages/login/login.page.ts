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

  register() {
    var test_data = [
      {
        geslacht: 'Female',
        voornaam: 'Constantine',
        achternaam: 'Alcide',
        nummer: 8509820,
      },
      {
        geslacht: 'Male',
        voornaam: 'Portie',
        achternaam: 'Lantuff',
        nummer: 610624,
      },
      {
        geslacht: 'Female',
        voornaam: 'Zelda',
        achternaam: 'Albery',
        nummer: 6378037,
      },
      {
        geslacht: 'Female',
        voornaam: 'Shena',
        achternaam: 'Urwin',
        nummer: 3539426,
      },
      {
        geslacht: 'Male',
        voornaam: 'Lindy',
        achternaam: 'Southwood',
        nummer: 7273875,
      },
      {
        geslacht: 'Female',
        voornaam: 'Amelie',
        achternaam: 'Ironmonger',
        nummer: 7896063,
      },
      {
        geslacht: 'Male',
        voornaam: 'Emlen',
        achternaam: 'Greves',
        nummer: 7905200,
      },
      {
        geslacht: 'Male',
        voornaam: 'Jodie',
        achternaam: 'Budgen',
        nummer: 8604976,
      },
      {
        geslacht: 'Male',
        voornaam: 'Port',
        achternaam: 'Menezes',
        nummer: 9772533,
      },
      {
        geslacht: 'Male',
        voornaam: 'Arvy',
        achternaam: 'Janisson',
        nummer: 2925809,
      },
    ];

    test_data.forEach((data) => {
      this.db
        .collection('patient')
        .add(data)
        .then((goodboi) => console.log('goodboi'));
    });
    // this.data.register(1563, 'Jorns', 'homo', 'Vrouw');
  }
}
