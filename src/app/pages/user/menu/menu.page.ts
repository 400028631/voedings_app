import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformatiePage } from './informatie/informatie.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private router: Router,
  ) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: InformatiePage,
    });
    modal.present();
  }

  goto(page: string) {
    console.log(page);
    this.router.navigate([page]);
  }
}
