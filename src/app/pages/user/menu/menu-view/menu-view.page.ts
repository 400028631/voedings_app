import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.page.html',
  styleUrls: ['./menu-view.page.scss'],
})
export class MenuViewPage implements OnInit {
  items: any = null;
  menu_type: string = null;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private router: Router,
  ) {}

  ngOnInit() {
    var type = this.route.snapshot.paramMap.get('type');
    this.db
      .collection('menu', (ref) => ref.where('searchterm', '==', type))
      .get()
      .subscribe((output) => {
        if (output.docs.length > 0) {
          var cur = output.docs[0];
          this.menu_type = cur.data().naam;
          this.db
            .collection('menu')
            .doc(cur.id)
            .collection('menu-item')
            .valueChanges()
            .subscribe((onchange) => {
              this.refreshData(cur.id);
              console.log('refreshing');
            });
        } else {
          this.router.navigate(['user']);
        }
      });
  }

  refreshData(id) {
    this.db
      .collection('menu')
      .doc(id)
      .collection('menu-item')
      .get()
      .subscribe((items) => {
        this.items = items.docs;
      });
  }
}
