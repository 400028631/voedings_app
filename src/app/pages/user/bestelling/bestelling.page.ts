import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bestelling',
  templateUrl: './bestelling.page.html',
  styleUrls: ['./bestelling.page.scss'],
})
export class BestellingPage implements OnInit {
  constructor(
    private view: ModalController,
    public data: DataService,
    private db: AngularFirestore,
  ) {
    this.userdata = this.data.userData;
  }

  userdata: any = null;
  items: any = null;
  ngOnInit() {
    this.db
      .collection('winkelwagen')
      .doc(localStorage.getItem('token'))
      .valueChanges()
      .subscribe(() => {
        this.data.getData(() => {
          this.items = this.data.bestelling.data().items;
          if (this.items.length <= 0) {
            this.modalClose();
          }
        });
      });
  }

  modalClose() {
    this.view.dismiss();
  }

  deleteProduct(id: string) {
    this.data.deleteProduct(id);
  }
}
