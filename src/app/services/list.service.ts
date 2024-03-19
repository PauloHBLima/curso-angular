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

  update(peoples: People[], people: People) {
    /* const arrayDePessoas = { name: String, nickname: String, age: Number, race: String}
    { ...arrayDePessoas, name: people.name, age: people.age, race: people.race} */
    return peoples.map((p) => people.name === p.name)

  }
}
