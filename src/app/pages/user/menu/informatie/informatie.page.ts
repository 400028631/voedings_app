import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-informatie',
  templateUrl: './informatie.page.html',
  styleUrls: ['./informatie.page.scss'],
})
export class InformatiePage implements OnInit {
  constructor(private view: ModalController) {}

  ngOnInit() {}

  modalClose() {
    this.view.dismiss();
  }
}
