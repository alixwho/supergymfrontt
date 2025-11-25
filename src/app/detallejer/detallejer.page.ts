import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EjerciciosService } from '../services/ejercicios'; 

@Component({
  selector: 'app-detallejer',
  standalone  : false,
  templateUrl: './detallejer.page.html',
  styleUrls: ['./detallejer.page.scss'],
})
export class DetallejerPage implements OnInit {

  dia!: string;
  ejercicios: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ejerciciosService: EjerciciosService
  ) {}

  ngOnInit() {
    this.dia = this.route.snapshot.paramMap.get('dia')!;
    this.cargarEjerciciosMock();
  }

  ionViewWillEnter() {
    // Actualiza la lista cada vez que vuelves a la página
    this.ejercicios = this.ejerciciosService.getEjercicios(this.dia);
  }

  todosCompletados(): boolean {
  return this.ejercicios.every(e => e.completado);
}


  cargarEjerciciosMock() {
    const ejemploVideo = 'assets/videos/ejemplo.mp4'; // Video de muestra

    const data = {
      lunes: [
        { nombre: 'Sentadillas', completado: false, descripcion: 'Fortalece piernas y glúteos', repeticiones: '3x15', video: ejemploVideo },
        { nombre: 'Abdominales', completado: false, descripcion: 'Fortalece el abdomen', repeticiones: '3x20', video: ejemploVideo },
        { nombre: 'Plancha', completado: false, descripcion: 'Ejercicio isométrico para core', repeticiones: '3x1 min', video: ejemploVideo },
      ],
      martes: [
        { nombre: 'Press de pecho', completado: false, descripcion: 'Fortalece el pecho', repeticiones: '3x12', video: ejemploVideo },
        { nombre: 'Flexiones', completado: false, descripcion: 'Pecho y brazos', repeticiones: '3x15', video: ejemploVideo },
      ],
      miercoles: [
        { nombre: 'Peso muerto', completado: false, descripcion: 'Fortalece espalda y piernas', repeticiones: '3x10', video: ejemploVideo },
        { nombre: 'Curl de bíceps', completado: false, descripcion: 'Bíceps', repeticiones: '3x12', video: ejemploVideo },
      ],
      jueves: [
        { nombre: 'Zancadas', completado: false, descripcion: 'Piernas y glúteos', repeticiones: '3x12', video: ejemploVideo },
        { nombre: 'Elevaciones laterales', completado: false, descripcion: 'Hombros', repeticiones: '3x15', video: ejemploVideo },
      ],
      viernes: [
        { nombre: 'Remo con barra', completado: false, descripcion: 'Espalda media', repeticiones: '3x10', video: ejemploVideo },
        { nombre: 'Dominadas asistidas', completado: false, descripcion: 'Espalda y bíceps', repeticiones: '3x8', video: ejemploVideo },
      ],
      sabado: [
        { nombre: 'Press militar', completado: false, descripcion: 'Hombros', repeticiones: '3x12', video: ejemploVideo },
        { nombre: 'Flexiones inclinadas', completado: false, descripcion: 'Pecho superior', repeticiones: '3x12', video: ejemploVideo },
      ],
      domingo: [
        { nombre: 'Cardio ligero', completado: false, descripcion: 'Actividad cardiovascular', repeticiones: '30 min', video: ejemploVideo },
        { nombre: 'Estiramientos', completado: false, descripcion: 'Relajación muscular', repeticiones: '5 min', video: ejemploVideo },
      ]
    };

    this.ejercicios = (data as any)[this.dia] || [];
    this.ejerciciosService.setEjercicios(this.dia, this.ejercicios);
  }

  irADetalle(ejercicio: any) {
    this.router.navigate(['/terminarejer'], { queryParams: { nombre: ejercicio.nombre, dia: this.dia } });
  }

  volverALista() {
    // Opción para marcar todos como completado antes de regresar
    this.ejercicios.forEach(e => e.completado = true);
    this.ejerciciosService.setEjercicios(this.dia, this.ejercicios);

    // Navega a la lista de ejercicios
    this.router.navigate(['/listaejer']);
  }
}
