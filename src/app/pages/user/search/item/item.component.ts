import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() menu_id: string;
  @Input() item_id: string;

  item: any = null;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .collection('menu')
      .doc(this.menu_id)
      .collection('menu-item')
      .doc(this.item_id)
      .get()
      .subscribe((item) => {
        this.item = item;
      });
  }
}
