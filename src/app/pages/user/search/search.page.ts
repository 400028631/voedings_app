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

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.paramMap.subscribe((output) => {
      var searchterm = output.get('term');
      this.searchTerm = searchterm;
      this.loadItems();
    });
  }

  loadItems() {}

  back() {
    this.location.back();
  }
}
