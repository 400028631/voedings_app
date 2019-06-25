import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TussendoortjesPage } from './tussendoortjes.page';

const routes: Routes = [
  {
    path: '',
    component: TussendoortjesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TussendoortjesPage]
})
export class TussendoortjesPageModule {}
