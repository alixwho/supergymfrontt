import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'graf',
    loadChildren: () => import('./graf/graf.module').then( m => m.GrafPageModule)
  },
  {
    path: 'listaejer',
    loadChildren: () => import('./listaejer/listaejer.module').then( m => m.ListaejerPageModule)
  },
  {
    path: 'detallejer',
    loadChildren: () => import('./detallejer/detallejer.module').then( m => m.DetallejerPageModule)
  },
  {
    path: 'terminarejer',
    loadChildren: () => import('./terminarejer/terminarejer.module').then( m => m.TerminarejerPageModule)
  },
  {
    path: 'rutinamartes',
    loadChildren: () => import('./rutinamartes/rutinamartes.module').then( m => m.RutinamartesPageModule)
  },
  {
    path: 'rutinamiercoles',
    loadChildren: () => import('./rutinamiercoles/rutinamiercoles.module').then( m => m.RutinamiercolesPageModule)
  },
  {
    path: 'rutinajueves',
    loadChildren: () => import('./rutinajueves/rutinajueves.module').then( m => m.RutinajuevesPageModule)
  },
  {
    path: 'rutinaviernes',
    loadChildren: () => import('./rutinaviernes/rutinaviernes.module').then( m => m.RutinaviernesPageModule)
  },
  {
    path: 'rutinasabado',
    loadChildren: () => import('./rutinasabado/rutinasabado.module').then( m => m.RutinasabadoPageModule)
  },
  {
    path: 'rutinadomingo',
    loadChildren: () => import('./rutinadomingo/rutinadomingo.module').then( m => m.RutinadomingoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
