import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.page.html',
  styleUrls: ['./ingredienten.page.scss'],
})
export class IngredientenPage implements OnInit {
  @Input() voedingswaarden: any;

  constructor() { }

  ngOnInit() {
    console.log(this.voedingswaarden);
  }
}
