import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logpagina',
  templateUrl: './logpagina.page.html',
  styleUrls: ['./logpagina.page.scss'],
})
export class LogpaginaPage implements OnInit {

  constructor(private view: ModalController) { }

  ngOnInit() {

  }

  modalClose() {
    this.view.dismiss();
  }
}
