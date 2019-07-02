import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  ) {
    this.db
      .collection('bestelling', (ref) =>
        ref.where('nummer', '==', localStorage.getItem('token')),
      )
      .valueChanges()
      .subscribe((data) => {
        this.getData();
      });
  }

  getData() {
    this.db
      .collection('bestelling')
      .doc(localStorage.getItem('token'))
      .get()
      .subscribe((bestelling) => {
        if (bestelling.data() != undefined) {
          this.bestelling = bestelling;
        } else {
          //create
          this.db
            .collection('bestelling')
            .doc(localStorage.getItem('token'))
            .set({
              items: [],
            });
        }
      });
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
              };

              if (this.bestelling != null) {
                var cur = this.bestelling.data().items;
                cur.push(newitem);
                this.db
                  .collection('bestelling')
                  .doc(this.bestelling.id)
                  .update({
                    items: cur,
                  })
                  .then(() => {
                    this.getData();
                  });
              }
            });
        }
      });
  }

  login(nummer: number) {
    this.db
      .collection('patient', (ref) => ref.where('nummer', '==', nummer))
      .get()
      .subscribe((patient) => {
        if (patient.docs.length > 0) {
          //ingelogd
          localStorage.setItem('token', patient.docs[0].data().nummer);
          this.userData = patient.docs[0].data();
          this.router.navigate(['user']);
        } else {
          //niet ingelogd
          alert('Dit klopt niet');
        }
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
