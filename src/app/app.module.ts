import { BestellingPageModule } from './pages/user/bestelling/bestelling.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './modules/components/components.module';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Shake } from '@ionic-native/shake/ngx';
import { InformatiePageModule } from './pages/user/menu/informatie/informatie.module';
import { IngredientenPageModule } from './pages/user/menu/item/ingredienten/ingredienten.module';

//firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    InformatiePageModule,
    IngredientenPageModule,
    BestellingPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Shake,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
