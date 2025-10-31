import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    // FORMULARIO
    this.formRegistro = this.fb.group(
      {
        numero_usuario: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmarPassword: ['', Validators.required],
        edad: [null],
        sexo: [''],
        peso: [null],
        altura: [null],
        nivel_conocimiento: ['', Validators.required],
        objetivo: [''],
        tipo_usuario: ['Registrado'],
      },
      { validators: this.validarCoincidencia }
    );
  }

  validarCoincidencia(control: AbstractControl) {
    const pass = control.get('password')?.value;
    const confirmar = control.get('confirmarPassword')?.value;
    return pass === confirmar ? null : { noCoinciden: true };
  }

  cambiarVisibilidadContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  cambiarVisibilidadConfirmacion() {
    this.mostrarConfirmar = !this.mostrarConfirmar;
  }

  registrar() {
    if (this.formRegistro.invalid) return;

    this.cargando = true;
    const datos = { ...this.formRegistro.value };


    if (datos.sexo === 'masculino') datos.sexo = 'M';
    else if (datos.sexo === 'femenino') datos.sexo = 'F';
    else datos.sexo = 'Otro';

    datos.tipo_usuario = 'Registrado';

    console.log('Datos que se envían:', datos);

    this.authService.register(datos).subscribe({
      next: (res) => {
        console.log('Registro exitoso:', res);
        localStorage.setItem('token', res.token);
        this.cargando = false;
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        console.error('Error en registro:', err);
        this.cargando = false;
      },
    });
  }
}
