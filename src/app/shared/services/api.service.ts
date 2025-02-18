import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users/${id}`);
  }

  // Canciones
  getSongs(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/songs`);
  }

  getSongById(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/songs/${id}`);
  }
}
