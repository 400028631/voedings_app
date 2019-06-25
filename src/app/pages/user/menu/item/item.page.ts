import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  testData = {
    naam: 'Fruitsalade',
    beschrijving: 'Een heerlijke fruitsalade van het ziekenhuis',
    maaltijd: 'lunch',
    fotoPath: null,
    voedingswaarden: [
        {
          naam: 'Vet',
          regels: [
            'Vet totaal 0,9 g',
          ]
        },
        {
          naam: 'Eiwit',
          regels: [
            'Eiwit plantaardig 6 g',
            'Eiwit totaal 7g'
          ]
        },
        {
          naam: 'Koolhydraten',
          regels: [
            'koolhydraten 23,1 g'
          ]
        }
    ],
    ingredienten: [
      'Ananas',
      'Druiven',
      'Kiwi\'s',
      'Aardbeien'
    ]
  };

  constructor() { }

  ngOnInit() {
    // this.testData.ingredienten.forEach(ingredient => {
    //   this.ingredient.push(ingredient);
    // });
  }

}
