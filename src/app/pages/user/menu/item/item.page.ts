import { DataService } from './../../../../services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IngredientenPageModule } from './ingredienten/ingredienten.module';
import { IngredientenPage } from './ingredienten/ingredienten.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: any = null;
  item_id: string = '';
  menu_type: string = '';

  ingredienten: any = [];
  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private router: Router,
    private modalCtrl: ModalController,
    private location: Location,
    private data: DataService,
  ) {}

  ngOnInit() {
    var menu = this.route.snapshot.paramMap.get('menu');
    var id = this.route.snapshot.paramMap.get('id');
    this.item_id = id;
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
                return;
              }
              this.item = item;
            });
        } else {
          this.router.navigate(['user']);
        }
      });
  }

  ingredientchange(event, ingredient) {
    const index = this.ingredienten.findIndex((e) => e.naam === ingredient);
    if (index === -1) {
      this.ingredienten.push({
        naam: ingredient,
        use: event.detail.checked,
      });
    } else {
      this.ingredienten[index] = {
        naam: ingredient,
        use: event.detail.checked,
      };
    }
  }

  async bestel() {
    await this.data.itemToevoegen(
      this.menu_type,
      this.item_id,
      this.ingredienten,
    );
    this.back();
  }

  // onClickIngredienten() {
  //   console.log('test');
  //   this.modalCtrl.create({
  //     component: IngredientenComponent,
  //     // componentProps: {
  //     //   ingredienten: this.item.data().ingredienten
  //     // }
  //   }).then(modalEl => {
  //     modalEl.present();
  //   });
  // }

  async onClickIngredienten() {
    const modal = await this.modalCtrl.create({
      component: IngredientenPage,
      componentProps: {
        voedingswaarden: this.item.data().voedingswaarden,
      },
    });
    modal.present();
  }

  back() {
    this.location.back();
  }
}
