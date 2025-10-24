import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  private ejerciciosDia: { [dia: string]: any[] } = {};

  setEjercicios(dia: string, ejercicios: any[]) {
    this.ejerciciosDia[dia] = ejercicios;
  }

  getEjercicios(dia: string) {
    return this.ejerciciosDia[dia] || [];
  }

  actualizarCompletado(dia: string, nombre: string, completado: boolean) {
    const ejercicio = this.ejerciciosDia[dia]?.find(e => e.nombre === nombre);
    if(ejercicio) ejercicio.completado = completado;
  }
}
