import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listaejer',
  standalone: false,
  templateUrl: './listaejer.page.html',
  styleUrls: ['./listaejer.page.scss'],
})
export class ListaejerPage implements OnInit {

  parteSeleccionada = 'hombro'; 

  // Ejercicios por categoría
  ejerciciosHombro = [
    { nombre: 'Press Militar', series: 4, reps: 12 },
    { nombre: 'Elevaciones Laterales', series: 3, reps: 15 },
  ];

  ejerciciosPecho = [
    { nombre: 'Press de Banca', series: 4, reps: 10 },
    { nombre: 'Aperturas con Mancuernas', series: 3, reps: 12 },

  ];

  ejerciciosPiernas = [
    { nombre: 'Sentadillas', series: 4, reps: 12 },
    { nombre: 'Prensa de Piernas', series: 4, reps: 10 },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  // Método para abrir la página de video
  verVideo(ejercicio: any) {
    console.log('Ver video de:', ejercicio.nombre);
    // Luego aquí pondrás la navegación a tu otra página
    // this.navCtrl.navigateForward('/ver-video');
  }
}
