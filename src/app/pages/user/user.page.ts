import { BestellingPage } from './bestelling/bestelling.page';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Shake } from '@ionic-native/shake/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(
    private data: DataService,
    private db: AngularFirestore,
    private shake: Shake,
    private route: Router,
  ) {}

  ngOnInit() {
    const watch = this.shake.startWatch(60).subscribe(() => {
      this.route.navigate(['dranken']);
    });

    if (!localStorage.getItem('token')) {
      this.data.logout();
      alert('Log in');
    } else {
      this.data.getData();
    }

    this.data.getUserData();
  }

  openBestellingModal() {
    this.data.presentModal(BestellingPage);
  }
}
