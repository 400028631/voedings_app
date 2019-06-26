import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //No route redirects to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  //login page route
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  //user page route
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },

  {
    path: 'menu-item',
    loadChildren:
      './pages/import/menu-item/menu-item.module#MenuItemPageModule',
  },

  //route under here should be 404
  { path: '**', redirectTo: 'login', pathMatch: 'full' },  { path: 'menu-view', loadChildren: './pages/user/menu/menu-view/menu-view.module#MenuViewPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
