import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  standalone:false,
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {
  email = '';

  constructor(
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async sendRecoveryCode() {
    if (!this.email) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, ingresa tu correo electrónico.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    console.log('Correo ingresado:', this.email);

    // 🔹 Aquí más adelante se conectará con Laravel para enviar el código
    const alert = await this.alertCtrl.create({
      header: 'Código enviado',
      message: 'Hemos enviado un código de recuperación a tu correo.',
      buttons: ['Aceptar']
    });
    await alert.present();

    this.router.navigateByUrl('/login');
  }
}