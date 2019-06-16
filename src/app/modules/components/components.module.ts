import { NgModule } from '@angular/core';
import { UserHeaderComponent } from 'src/app/comp/user-header/user-header.component';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from 'src/app/pages/user/menu/menu.page';
import { DrankenPage } from 'src/app/pages/user/dranken/dranken.page';
import { GeschiedenisPage } from 'src/app/pages/user/geschiedenis/geschiedenis.page';

@NgModule({
    imports: [
      IonicModule.forRoot()
  ],
  declarations: [ UserHeaderComponent, MenuPage, DrankenPage, GeschiedenisPage ],
  exports: [
    UserHeaderComponent,
    MenuPage,
    DrankenPage,
    GeschiedenisPage
  ]
})


export class ComponentsModule { }