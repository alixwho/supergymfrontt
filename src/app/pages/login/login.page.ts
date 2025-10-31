import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  cargando = false;
  mensajeError = '';
  mostrarPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      numero_usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get numero_usuario() {
    return this.loginForm.get('numero_usuario')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  ingresar() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.cargando = true;
    this.mensajeError = '';

    const { numero_usuario, password } = this.loginForm.value;
    console.log('Enviando datos de login:', this.loginForm.value);

    this.authService.login(numero_usuario, password).subscribe({
      next: (res) => {
        console.log('Login exitoso:', res);


        this.authService.saveSession(res.token, res.user);

        this.cargando = false;
        this.navCtrl.navigateRoot('/home'); 
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.cargando = false;
        this.mensajeError =
          err.status === 401
            ? 'Credenciales inválidas. Verifica tus datos.'
            : 'Ocurrió un error al iniciar sesión.';
      },
    });
  }

  irARegistro() {
    this.router.navigate(['/register']);
  }

  irARecuperar() {
    this.router.navigate(['/recover-password']);
  }
}
