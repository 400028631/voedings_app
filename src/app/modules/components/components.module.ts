import { AvondetenPage } from './../../pages/user/menu/avondeten/avondeten.page';
import { LunchPage } from './../../pages/user/menu/lunch/lunch.page';
import { InformatiePage } from './../../pages/user/menu/informatie/informatie.page';
import { ItemPage } from './../../pages/user/menu/item/item.page';
import { NgModule } from '@angular/core';
import { UserHeaderComponent } from 'src/app/comp/user-header/user-header.component';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from 'src/app/pages/user/menu/menu.page';
import { DrankenPage } from 'src/app/pages/user/dranken/dranken.page';
import { GeschiedenisPage } from 'src/app/pages/user/geschiedenis/geschiedenis.page';
import { OntbijtPage } from 'src/app/pages/user/menu/ontbijt/ontbijt.page';
import { TussendoortjesPage } from 'src/app/pages/user/menu/tussendoortjes/tussendoortjes.page';

@NgModule({
  imports: [IonicModule.forRoot()],
  declarations: [
    UserHeaderComponent,
    MenuPage,
    DrankenPage,
    GeschiedenisPage,
    ItemPage,
    OntbijtPage,
    LunchPage,
    AvondetenPage,
    TussendoortjesPage,
  ],
  exports: [
    UserHeaderComponent,
    MenuPage,
    DrankenPage,
    GeschiedenisPage,
    ItemPage,
    OntbijtPage,
    LunchPage,
    AvondetenPage,
    TussendoortjesPage,
  ],
})
export class ComponentsModule {}
