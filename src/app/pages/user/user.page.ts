import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(private data: DataService, private db: AngularFirestore) {
    db.collection('test')
      .get()
      .subscribe((output) => {
        output.docs.forEach((persoon) => {
          console.log(persoon.data().naam);
        });
      });
  }

  ngOnInit() {}
}
