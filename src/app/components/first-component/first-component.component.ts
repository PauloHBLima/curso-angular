import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Paulo';
  age: number = 30;
  job = 'Cadista';
  hobbies = ['Correr', ' Desenhar', 'Assistir Anime', 'Musculação']
  car = {
    nameCar: 'Porshe',
    yearCar: 2014
  }

  constructor() { };
  ngOnInit(): void { };

}
