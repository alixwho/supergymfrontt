import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  formRegistro: FormGroup;
  mostrarContrasena = false;
  mostrarConfirmar = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formRegistro = this.fb.group(
      {
        nombre: ['', Validators.required],
        correo: ['', [Validators.required, Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(6)]],
        confirmarContrasena: ['', Validators.required],
        edad: [null, [Validators.required, Validators.min(10)]],
        genero: ['', Validators.required],
        peso: [null],
        altura: [null],
        nivel: ['', Validators.required],
      },
      { validators: this.validarCoincidencia }
    );
  }

  validarCoincidencia(control: AbstractControl) {
    const contrasena = control.get('contrasena')?.value;
    const confirmar = control.get('confirmarContrasena')?.value;
    return contrasena === confirmar ? null : { noCoinciden: true };
  }

  cambiarVisibilidadContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
  
  cambiarVisibilidadConfirmacion() {
    this.mostrarConfirmar = !this.mostrarConfirmar;
  }

  registrar() {
    if (this.formRegistro.valid) {
      console.log('Datos registrados:', this.formRegistro.value);
      this.router.navigateByUrl('/login');
    } else {
      this.formRegistro.markAllAsTouched();
    }
  }
}
