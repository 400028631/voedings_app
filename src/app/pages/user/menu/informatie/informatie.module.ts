import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InformatiePage } from './informatie.page';
import { LogpaginaPage } from 'src/app/logpagina/logpagina.page';

const routes: Routes = [
  {
    path: '',
    component: InformatiePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [InformatiePage, LogpaginaPage],
  entryComponents: [LogpaginaPage]
})
export class InformatiePageModule {}
