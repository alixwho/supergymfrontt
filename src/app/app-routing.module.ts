import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccesoGuard } from './guards/acceso-guard';
import { InicioGuard } from './guards/inicio-guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then(m => m.RecoverPasswordPageModule),
    canActivate: [AccesoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [InicioGuard]
  },
  {
    path: 'progreso-semanal',
    loadChildren: () => import('./pages/progreso-semanal/progreso-semanal.module').then(m => m.ProgresoSemanalPageModule)
  },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
