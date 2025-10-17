import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  standalone: false,
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {
  recoverForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.recoverForm.get('email')!;
  }

  async enviarCodigoRecuperacion() {
    if (this.recoverForm.invalid) {
      this.recoverForm.markAllAsTouched();
      return;
    }

    const correo = this.email.value;
    console.log('Correo ingresado:', correo);

    const alert = await this.alertCtrl.create({
      header: 'Código enviado',
      message: `Hemos enviado un código de recuperación a ${correo}.`,
      buttons: ['Aceptar']
    });
    await alert.present();

    this.router.navigateByUrl('/login');
  }
}
