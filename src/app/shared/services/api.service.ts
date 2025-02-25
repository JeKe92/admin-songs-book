import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly BASE_URL = 'https://admin-songs-book-api.onrender.com';

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
    return this.http.get(`${this.BASE_URL}/song/${id}`);
  }

  addSong(song: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/song`, song);
  }

  // Cantantes
  getSingers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/singers`);
  }
}
