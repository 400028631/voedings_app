import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.component.html',
  styleUrls: ['./ingredienten.component.scss'],
})
export class IngredientenComponent implements OnInit {
  @Input() ingredienten: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.ingredienten);
  }

}
