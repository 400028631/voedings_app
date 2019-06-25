import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.page.html',
  styleUrls: ['./menu-item.page.scss'],
})
export class MenuItemPage implements OnInit {
  data: any = {};

  constructor(private db: AngularFirestore) {}

  ngOnInit() {}

  //ontbijt id : djSOkwURlB0DmBbgWBjv
  //lumch id : l1VjDxpZpXlAOU3tNnFx
  //avondeten: mXkeoybvzvR3nyl3crwQ
  //tussendoor id: tKm09UVOCbUdH2N8icz1

  addToMenu() {
    this.db
      .collection('menu')
      .doc('l1VjDxpZpXlAOU3tNnFx') //hier moet het id van het menu
      .collection('menu-item')
      .add({
        naam: 'product',
        beschrijving: 'Dit is de beschrijving van een product',
        fotoPath: null,
        voedingswaarden: [
          {
            naam: 'Vet',
            regels: ['Vet totaal 0,9 g'],
          },
          {
            naam: 'Eiwit',
            regels: ['Eiwit plantaardig 6 g', 'Eiwit totaal 7g'],
          },
          {
            naam: 'Koolhydraten',
            regels: ['koolhydraten 23,1 g'],
          },
        ],
        ingredienten: ['Brood', 'ui', 'etc'],
      });
  }
}
