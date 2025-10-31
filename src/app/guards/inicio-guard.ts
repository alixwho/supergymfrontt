import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; // 👈 igual aquí


@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {

      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
