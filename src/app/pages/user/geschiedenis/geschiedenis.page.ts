import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LogpaginaPage } from 'src/app/logpagina/logpagina.page';


@Component({
  selector: 'app-geschiedenis',
  templateUrl: './geschiedenis.page.html',
  styleUrls: ['./geschiedenis.page.scss'],
})
export class GeschiedenisPage implements OnInit {
  constructor(
    private router: Router,
    public modalController: ModalController,
    ) {}

  ngOnInit() {}

  async PresentModal() {
    const modal = await this.modalController.create({
      component: LogpaginaPage,
    });
    await modal.present();
  }
  
}
