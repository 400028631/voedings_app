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

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [      
      {
        path: '',
        redirectTo: 'menu'
      },   
      {
        path: 'menu',
        component: MenuPage
      },
      {
        path: 'dranken',
        component: DrankenPage
      },
      {
        path: 'geschiedenis',
        component: GeschiedenisPage
      },      
      {
        path: '**',
        redirectTo: 'menu'
      },  
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
