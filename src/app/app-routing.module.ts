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
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'retos',
    loadChildren: () => import('./pages/retos/retos.module').then( m => m.RetosPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
<<<<<<< HEAD
  {
    path: 'graf',
    loadChildren: () => import('./graf/graf.module').then( m => m.GrafPageModule)
  },
  {
    path: 'listaejer',
    loadChildren: () => import('./listaejer/listaejer.module').then( m => m.ListaejerPageModule)
  },
  {
  path: 'detallejer/:dia',
  loadChildren: () => import('./detallejer/detallejer.module').then(m => m.DetallejerPageModule)
},
  {
    path: 'terminarejer',
    loadChildren: () => import('./terminarejer/terminarejer.module').then( m => m.TerminarejerPageModule)
  },
  {
    path: 'terminodedia',
    loadChildren: () => import('./terminodedia/terminodedia.module').then( m => m.TerminodediaPageModule)
  },
];
=======
>>>>>>> ramaAnnuar

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
