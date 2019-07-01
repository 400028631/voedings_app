import { AngularFirestore } from '@angular/fire/firestore';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: string = '';
  searchItems: any = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private db: AngularFirestore,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((output) => {
      var searchterm = output.get('term');
      this.searchTerm = searchterm;
      this.searchItems = [];
      this.loadItems();
    });
  }

  loadItems() {
    this.searchItems = [];
    this.db
      .collection('menu')
      .get()
      .subscribe((menus) => {
        menus.docs.forEach((menu) => {
          var curid = menu.id;
          this.db
            .collection('menu')
            .doc(menu.id)
            .collection('menu-item')
            .get()
            .subscribe((items) => {
              items.docs.forEach((item) => {
                if (this.check(item.data())) {
                  this.searchItems.push({
                    menu_id: curid,
                    menu_item_id: item.id,
                    data: item.data(),
                  });
                }
              });
            });
        });
      });
  }

  back() {
    this.location.back();
  }

  check(data: any) {
    var naam = data.naam;
    var searchterm = this.searchTerm.toLowerCase();
    if (naam.indexOf(searchterm) !== -1) {
      return true;
    } else if (data.beschrijving.indexOf(searchterm) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
