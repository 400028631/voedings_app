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

  constructor(
    private http: HttpClient,
    private router: Router,
    private db: AngularFirestore
  ) {}

  login(nummer: number) {
    this.db
      .collection('patient', (ref) => ref.where('nummer', '==', nummer))
      .get()
      .subscribe((patient) => {
        if (patient.docs.length > 0) {
          //ingelogd
          this.userData = patient.docs[0].data();
          this.router.navigate(['user']);
        } else {
          //niet ingelogd
          alert('Dit klopt niet');
        }
      });
  }

  register(nummer: number, naam: string, achternaam: string, geslacht: string) {
    const newpatient = this.db.collection('patient').add({
      nummer: nummer,
      voornaam: naam,
      achternaam: achternaam,
      geslacht: geslacht,
    });

    newpatient.then((success) => {
      alert('account aangemaakt');
    });

    newpatient.catch((error) => {
      alert('fout bij aanmaken');
    });
  }
}
