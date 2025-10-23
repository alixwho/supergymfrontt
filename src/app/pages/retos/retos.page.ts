import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retos',
  templateUrl: './retos.page.html',
  styleUrls: ['./retos.page.scss'],
  standalone: false
})
export class RetosPage {
  // Datos del reto principal
  totalDays = 30;
  currentDay = 18;
  get progressPercent(): number {
    return Math.round((this.currentDay / this.totalDays) * 100);
  }

  // Encabezado días
  weekdays = ['L','M','X','J','V','S','D'];

  // Dos filas de 7 días (true = completado, false = fallado)
  row1: boolean[] = [true, true, true, false, true, true, false];
  row2: boolean[] = [true, true, false, true, true, true, true];

  // Stats
  diasCompletados = 15;
  diasPerdidos = 3;
}
