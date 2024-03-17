import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { People } from 'src/app/People';


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

  animalDetails = ''

  constructor(private listService: ListService) { }

  ngOnInit(): void { }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animail..')
    this.animals = this.listService.remove(this.animals, animal);
  }
}
