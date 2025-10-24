import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-progreso-semanal',
  standalone:false,
  templateUrl: './progreso-semanal.page.html',
  styleUrls: ['./progreso-semanal.page.scss'],
})
export class ProgresoSemanalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.cargarGrafica();
  }

  cargarGrafica() {
    const ctx = document.getElementById('graficaSemanal') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Entrenamientos',
            data: [1, 1, 1, 1, 1, 0.5, 0.3],
            backgroundColor: [
              '#28a745',
              '#28a745',
              '#28a745',
              '#28a745',
              '#007bff',
              '#007bff',
              '#dc3545'
            ],
            borderRadius: 10,
            barThickness: 25
          }
        ]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { display: false, beginAtZero: true },
          x: {
            grid: { display: false },
            ticks: { color: '#666' }
          }
        },
      },
    });
    
  }
}

