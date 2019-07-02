import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformatiePage } from './informatie/informatie.page';
import { Router } from '@angular/router';

import * as Moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  today = new Date();
  hours = this.today.getHours();
  minutes = this.today.getMinutes();
  meal = '';

  constructor(
    private modalController: ModalController,
    private router: Router,
    private firestore: AngularFirestore
  ) {}

  TimeCheck(meal) {
    let format = 'hh:mm:ss';
    let van = null;
    let tot = null;
    let nu = Moment();
    switch (meal) {
      case 'Breakfast':
        van = Moment('07:00:00', format);
        tot = Moment('10:30:00', format);
        break;
      case'Lunch':
        van = Moment('10:30:00', format);
        tot = Moment('15:30:00', format);
        break;
      case'Dinner':
        van = Moment('15:30:00', format);
        tot = Moment('19:30:00', format);
        break;
      default:
        return false;
        break;
    }
    return Moment().isBetween(van, tot);

  }
  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: InformatiePage,
    });
    modal.present();
  }

  goto(page: string) {
    this.router.navigate([page]);
  }
}
