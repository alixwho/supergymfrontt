import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  nombre = '';
  edad: number | null = null;
  genero = '';
  peso: number | null = null;
  altura: number | null = null;
  nivel = '';

  constructor(private router: Router) {}

  register() {
    console.log('Datos registrados:', {
      nombre: this.nombre,
      edad: this.edad,
      genero: this.genero,
      peso: this.peso,
      altura: this.altura,
      nivel: this.nivel
    });

    // 🔹 Aquí más adelante harás la conexión con el backend (Laravel)
    this.router.navigateByUrl('/login');
  }
}