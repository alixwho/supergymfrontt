import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EjerciciosService } from '../services/ejercicios'; 

@Component({
  selector: 'app-terminarejer',
  standalone: false,
  templateUrl: './terminarejer.page.html',
  styleUrls: ['./terminarejer.page.scss'],
})
export class TerminarejerPage implements OnInit {

  ejercicio: any = {};
  dia!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ejerciciosService: EjerciciosService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const nombre = params['nombre'];
      this.dia = params['dia'];
      this.ejercicio = this.ejerciciosService.getEjercicios(this.dia)
                        .find((e:any) => e.nombre === nombre);
    });
  }

  toggleCompletado() {
    
    this.ejercicio.completado = !this.ejercicio.completado;

    // Guardar el cambio en el servicio
    this.ejerciciosService.actualizarCompletado(this.dia, this.ejercicio.nombre, this.ejercicio.completado);

    // RETRASO antes de regresar a detallejer
    setTimeout(() => {
      this.router.navigate(['/detallejer', this.dia]);
    }, 1000); 
  }
}
