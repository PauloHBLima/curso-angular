import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'arthur', type: "dog" },
    { name: 'marcos', type: "rato" },
    { name: 'paulo', type: "cavalo" },
    { name: 'guilherme', type: "anta" },
  ]
  ngOnInit(): void {}
  constructor() {}
}
