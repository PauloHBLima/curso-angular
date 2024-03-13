import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'arthur', type: "dog", age: 5 },
    { name: 'marcos', type: "rato", age: 20 },
    { name: 'paulo', type: "cavalo", age: 15 },
    { name: 'guilherme', type: "anta", age: 18 },
  ]

  animalDetails= ''
  
  ngOnInit(): void {}
  constructor() {}

  showAge(animal: Animal) {
this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
}
