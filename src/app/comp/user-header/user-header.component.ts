import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent implements OnInit {
  constructor(private router: Router, private data: DataService) {}

  searchValue: string = '';
  ngOnInit() {}

  menu() {
    this.router.navigate(['user/menu']);
  }
  dranken() {
    this.router.navigate(['user/dranken']);
  }
  geschiedenis() {
    this.router.navigate(['user/geschiedenis']);
  }

  changeSearchTerm($event) {
    var value = $event.detail.value;
    this.searchValue = value;
  }

  search() {
    this.router.navigate([`user/search/${this.searchValue}`]);
  }
}
