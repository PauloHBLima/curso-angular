import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Anime } from '../Anime';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  private apiUrlTwo = 'http://localhost:3000/animes';



  constructor(private http: HttpClient) { } //da acesso as métodos http get, post etc...

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getAllAnime(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrlTwo)
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}


