import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  cerrarSesion() {
    localStorage.removeItem('usuario'); 
    this.router.navigate(['/login']);   
  }

  irAProgresoSemanal() {
 
    this.router.navigate(['/progreso-semanal']);
  }
}
