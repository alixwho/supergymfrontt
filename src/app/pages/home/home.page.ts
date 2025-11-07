import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {

  }

  async ionViewWillEnter() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.nombreUsuario = user.name || user.numero_usuario || 'Usuario';

      const toast = await this.toastController.create({
        message: `¡Bienvenido, ${this.nombreUsuario}!`,
        duration: 2500,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();
    }
  }

  async cerrarSesion() {
    this.authService.logout().subscribe({
      next: async (response) => {
        console.log(response.message);

        const toast = await this.toastController.create({
          message: 'Sesión cerrada correctamente',
          duration: 2000,
          color: 'danger',
          position: 'bottom'
        });
        await toast.present();

        this.router.navigate(['/login']);
      },
      error: async (err) => {
        console.error('Error al cerrar sesión:', err);

        const toast = await this.toastController.create({
          message: 'Ocurrió un error al cerrar sesión',
          duration: 2000,
          color: 'danger',
          position: 'bottom'
        });
        await toast.present();

        this.authService.clearSession();
        this.router.navigate(['/login']);
      }
    });
  }

  irAProgresoSemanal() {
    this.router.navigate(['/progreso-semanal']);
  }
}
