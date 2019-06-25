import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //No route redirects to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  //login page route
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  //user page route
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },

  //route under here should be 404
  { path: '**', redirectTo: 'login', pathMatch: 'full' },  { path: 'informatie', loadChildren: './pages/user/menu/informatie/informatie.module#InformatiePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
