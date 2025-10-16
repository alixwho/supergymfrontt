import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements AfterViewInit, OnDestroy {
  @ViewChild('progressChart', { static: false }) progressChartRef?: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  ngAfterViewInit() {
    // Datos de ejemplo del mockup (78 -> 76 -> 75 -> 75)
    const data = [78, 76, 75, 75];

    const canvas = document.getElementById('progressChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
        datasets: [
          {
            data,
            fill: false,
            tension: 0.35,
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 4,
            borderColor: '#2a74ff',
            pointBackgroundColor: '#2a74ff'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: false }
          },
          y: {
            grid: { color: '#eef0f5' },
            ticks: {
              stepSize: 2,
              color: '#8a8f98', // valores 74..80 aprox. para imitar mockup
            },
            suggestedMin: 74,
            suggestedMax: 81
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }

  onEditarPerfil() {
    // Aquí navegas a tu formulario de edición cuando lo tengamos
    // this.router.navigateByUrl('/editar-perfil');
    console.log('Editar Perfil');
  }
}
