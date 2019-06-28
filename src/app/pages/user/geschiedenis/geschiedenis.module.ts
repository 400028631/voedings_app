import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeschiedenisPage } from './geschiedenis.page';
import { LogpaginaPage } from 'src/app/logpagina/logpagina.page';

const routes: Routes = [
  {
    path: '',
    component: GeschiedenisPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GeschiedenisPage, LogpaginaPage],
  entryComponents: [LogpaginaPage]
})
export class GeschiedenisPageModule {}
