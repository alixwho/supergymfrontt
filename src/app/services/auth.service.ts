import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 //Url de la api
  private API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // REGISTRO
  register(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, data);
  }

  // LOGIN
  login(numero_usuario: string, password: string): Observable<{ token: string, user: any }> {
    return this.http.post<{ token: string, user: any }>(`${this.API_URL}/login`, {
      numero_usuario,
      password
    }).pipe(
      tap((response: { token: string; user: any; }) => {
        // Guardar token y usuario al iniciar sesión
        if (response?.token && response?.user) {
          this.saveSession(response.token, response.user);
        }
      })
    );
  }

  // Guardar sesión
  saveSession(token: string, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Obtener perfil autenticado
  me(): Observable<any> {
    return this.http.get(`${this.API_URL}/me`, {
      headers: this.getAuthHeaders()
    });
  }


  logout(): Observable<any> {
    return this.http.post(`${this.API_URL}/logout`, {}, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.clearSession();  
      })
    );
  }

  clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
