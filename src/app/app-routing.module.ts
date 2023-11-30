import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/contatos/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./view/contatos/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'detalhar',
    loadChildren: () => import('./view/contatos/detalhar/detalhar.module').then( m => m.DetalharPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./view/usuarios/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./view/usuarios/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./view/usuarios/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./view/usuarios/signup/signup.module').then( m => m.SignupPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
