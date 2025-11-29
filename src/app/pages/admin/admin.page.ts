import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false
})
export class AdminPage {
  stats = { rutinas: 24, ejercicios: 156, videos: 89 };

  gestionarUsuarios(){ console.log('Gestionar Usuarios'); }
  verReportes(){ console.log('Ver Reportes'); }
}
