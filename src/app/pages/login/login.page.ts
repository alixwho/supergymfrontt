import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get correo() {
    return this.loginForm.get('correo')!;
  }

  get contrasena() {
    return this.loginForm.get('contrasena')!;
  }

  ingresar() {
    if (this.loginForm.valid) {
      localStorage.setItem('usuario', this.loginForm.value.correo);
      this.router.navigate(['/home']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  irARegistro() {
    this.router.navigate(['/register']);
  }

  irARecuperar() {
    this.router.navigate(['/recover-password']);
  }
}
