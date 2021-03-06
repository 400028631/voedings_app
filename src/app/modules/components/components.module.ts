import { BestellingPage } from './../../pages/user/bestelling/bestelling.page';
import { SearchPage } from './../../pages/user/search/search.page';
import { MenuViewPage } from './../../pages/user/menu/menu-view/menu-view.page';
import { CommonModule } from '@angular/common';
import { InformatiePage } from './../../pages/user/menu/informatie/informatie.page';
import { ItemPage } from './../../pages/user/menu/item/item.page';
import { NgModule } from '@angular/core';
import { UserHeaderComponent } from 'src/app/comp/user-header/user-header.component';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from 'src/app/pages/user/menu/menu.page';
import { DrankenPage } from 'src/app/pages/user/dranken/dranken.page';
import { GeschiedenisPage } from 'src/app/pages/user/geschiedenis/geschiedenis.page';
import { ItemComponent } from 'src/app/pages/user/search/item/item.component';

@NgModule({
  imports: [IonicModule.forRoot(), CommonModule],
  declarations: [
    UserHeaderComponent,
    MenuPage,
    DrankenPage,
    GeschiedenisPage,
    ItemPage,
    MenuViewPage,
    SearchPage,
    ItemComponent,
  ],
  exports: [
    UserHeaderComponent,
    MenuPage,
    DrankenPage,
    GeschiedenisPage,
    ItemPage,
    MenuViewPage,
    SearchPage,
    ItemComponent,
  ],
})
export class ComponentsModule {}
