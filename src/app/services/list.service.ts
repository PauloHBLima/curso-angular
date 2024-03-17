import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { People } from '../People';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {

    return animals.filter((a) => animal.name !== a.name);
  }

 /*  create(peoples: People[], people: People) {
    return people.push((p) => people.name, people.nickname, people.age, people.race)
  } */
}
