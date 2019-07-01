import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredienten',
  templateUrl: './ingredienten.page.html',
  styleUrls: ['./ingredienten.page.scss'],
})
export class IngredientenPage implements OnInit {
  @Input() voedingswaarden: any;
  
  voedingswaardenI: any;

  constructor() { }

  ngOnInit() {
    this.voedingswaardenI = this.voedingswaarden;
    console.log(this.voedingswaardenI);
  }
}
