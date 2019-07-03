import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public baseUrl: string = 'https://voedingapi.000webhostapp.com/public';

  public userData: any = null;

  public bestelling: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private db: AngularFirestore,
    private toastController: ToastController,
    private modalController: ModalController,
  ) {
    this.db
      .collection('winkelwagen')
      .valueChanges()
      .subscribe(() => {
        this.getData();
      });

    this.db
      .collection('patient', (ref) =>
        ref.where('nummer', '==', localStorage.getItem('token')),
      )
      .get()
      .subscribe((patient) => {
        if (patient.docs.length > 0) {
          this.userData = patient.docs[0];
        } else {
          this.userData = null;
        }
      });
  }

  getData(cb?: () => void) {
    this.db
      .collection('winkelwagen')
      .doc(localStorage.getItem('token'))
      .get()
      .subscribe((bestelling) => {
        if (bestelling.data() != undefined) {
          this.bestelling = bestelling;
          if (cb) {
            cb();
          }
        } else {
          //create
          this.db
            .collection('winkelwagen')
            .doc(localStorage.getItem('token'))
            .set({
              items: [],
            })
            .then((doc) => {
              this.getData();
            });
        }
      });
  }

  getUserData() {
    if (localStorage.getItem('userId')) {
      this.db
        .collection('patient')
        .doc(localStorage.getItem('userId'))
        .get()
        .subscribe((patient) => {
          this.userData = patient;
        });
    } else {
      this.userData = null;
    }
  }

  itemToevoegen(menu: string, item: string, uitzonderingen: any) {
    var newuitzondering = [];
    uitzonderingen.forEach((uitzondering) => {
      if (uitzondering.use == false) {
        newuitzondering.push(uitzondering);
      }
    });

    this.db
      .collection('menu', (ref) => ref.where('naam', '==', menu))
      .get()
      .subscribe((menu) => {
        if (menu.docs.length > 0) {
          this.db
            .collection('menu')
            .doc(menu.docs[0].id)
            .collection('menu-item')
            .doc(item)
            .get()
            .subscribe((item) => {
              var newitem = {
                uitzondering: newuitzondering,
                item: {
                  id: item.id,
                  data: item.data(),
                },
                amount: 1,
                randomid: this.guidGenerator(),
              };

              if (this.bestelling != null) {
                var cur = this.bestelling.data().items;
                cur.push(newitem);
                this.db
                  .collection('winkelwagen')
                  .doc(this.bestelling.id)
                  .update({
                    items: cur,
                  })
                  .then(() => {
                    this.getData();
                    this.presentToast('Product toegevoegd.');
                  })
                  .catch(() => {
                    this.presentToast('Er is iets fout gegaan');
                  });
              }
            });
        }
      });
  }

  deleteProduct(id: string) {
    this.db
      .collection('winkelwagen')
      .doc(localStorage.getItem('token'))
      .get()
      .subscribe((winkelwagen) => {
        var curitems = winkelwagen.data().items;
        var newitems = [];
        curitems.forEach((item) => {
          if (item.randomid != id) {
            newitems.push(item);
          }
        });
        this.db
          .collection('winkelwagen')
          .doc(localStorage.getItem('token'))
          .update({
            items: newitems,
          });
      });
  }

  placeOrder() {
    var order = this.bestelling.data();
    order.patient = localStorage.getItem('token');
    order.time = new Date();

    this.db
      .collection('bestelling')
      .add(order)
      .then(() => {
        this.db
          .collection('winkelwagen')
          .doc(localStorage.getItem('token'))
          .update({
            items: [],
          })
          .then(() => {
            this.presentToast('Uw bestelling is geplaatst');
          });
      });
  }

  async presentToast(input: string) {
    const toast = await this.toastController.create({
      message: input,
      duration: 2000,
    });
    toast.present();
  }

  login(nummer: number) {
    this.db
      .collection('patient', (ref) => ref.where('nummer', '==', nummer))
      .get()
      .subscribe((patient) => {
        if (patient.docs.length > 0) {
          //ingelogd
          localStorage.setItem('token', patient.docs[0].data().nummer);
          localStorage.setItem('userId', patient.docs[0].id);
          this.userData = patient.docs[0].data();
          this.router.navigate(['user']);
        } else {
          //niet ingelogd
          alert('Dit klopt niet');
        }
      });
  }

  async presentModal(page: any) {
    const modal = await this.modalController.create({
      component: page,
    });
    return await modal.present();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  guidGenerator() {
    var S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    );
  }
}
