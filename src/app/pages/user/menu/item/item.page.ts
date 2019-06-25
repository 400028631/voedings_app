import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  testData = [{
    naam: 'Fruitsalade',
    beschrijving: 'Een heerlijke fruitsalade van het ziekenhuis',
    maaltijd: 'lunch',
    fotoPath: 'https://www.francescakookt.nl/wp-content/uploads/2017/08/zomerse_fruitsalade_uitgelicht_1.jpg',
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
  },
  {
    naam: 'Yoghurt van jersey koeien',
    beschrijving: 'Romige yoghurt van jersey koeien gereseveerd met muesli of granola en honing',
    maaltijd: 'lunch',
    fotoPath: 'https://hollandjersey.com/wp-content/uploads/2017/01/product-jersey-yoghurt-1.png',
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
      'muesli',
      'granola',
      'honing'
    ]
  }];

  constructor() { }

  ngOnInit() {
    // this.testData.ingredienten.forEach(ingredient => {
    //   this.ingredient.push(ingredient);
    // });
  }

}
