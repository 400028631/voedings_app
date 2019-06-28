import { SearchPage } from './search/search.page';
import { MenuViewPage } from './menu/menu-view/menu-view.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { ComponentsModule } from 'src/app/modules/components/components.module';
import { MenuPage } from './menu/menu.page';
import { DrankenPage } from './dranken/dranken.page';
import { GeschiedenisPage } from './geschiedenis/geschiedenis.page';
import { ItemPage } from './menu/item/item.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: '',
        redirectTo: 'menu',
      },
      {
        path: 'menu',
        component: MenuPage,
      },
      {
        path: 'dranken',
        component: DrankenPage,
      },
      {
        path: 'geschiedenis',
        component: GeschiedenisPage,
      },
      {
        path: 'menu/item/:menu/:id',
        component: ItemPage,
      },
      {
        path: 'menu/type/:type',
        component: MenuViewPage,
      },
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: '**',
        redirectTo: 'menu',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UserPage],
})
export class UserPageModule {}
