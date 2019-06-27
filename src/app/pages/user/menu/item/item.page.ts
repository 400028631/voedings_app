import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: any = null;
  menu_type: string = '';
  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private router: Router,
  ) {}

  ngOnInit() {
    var menu = this.route.snapshot.paramMap.get('menu');
    var id = this.route.snapshot.paramMap.get('id');

    this.db
      .collection('menu', (ref) => ref.where('searchterm', '==', menu))
      .get()
      .subscribe((menu) => {
        if (menu.docs.length > 0) {
          var menuid = menu.docs[0].id;
          this.menu_type = menu.docs[0].data().naam;
          this.db
            .collection('menu')
            .doc(menuid)
            .collection('menu-item')
            .doc(id)
            .get()
            .subscribe((item) => {
              if (item.data() === undefined) {
                this.router.navigate(['user']);
              }
              this.item = item;
            });
        } else {
          this.router.navigate(['user']);
        }
      });
  }
}
