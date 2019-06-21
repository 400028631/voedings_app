import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUserdata((user) => {
      console.log(user);
    });
  }
}
