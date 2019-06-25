import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformatiePage } from './informatie/informatie.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: InformatiePage,
    });
    modal.present();
  }
}
