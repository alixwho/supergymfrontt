import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; // 👈 esta es la línea correcta

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuario = localStorage.getItem('usuario');

    // Si ya está logueado, lo mandamos al home
    if (usuario) {
      this.router.navigate(['/home']);
      return false;
    }

    // Si no está logueado, puede ver login/register/recover
    return true;
  }
}