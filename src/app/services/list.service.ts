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

  remove(animals: Animal[], animal: Animal) {

    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getAllAnime(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrlTwo)
  }
}


