import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/People';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  peoples: People[] = [
    { name: 'Paulo', nickname: 'Henrique', age: 29, race: 'branco' },
    { name: 'Fernanda', nickname: 'Souza', age: 33, race: 'Morena' },
    { name: 'Arthur', nickname: 'Leonardo', age: 30, race: 'Amarelo' },
    { name: 'Rato', nickname: 'Vinicius', age: 29, race: 'Cinza' },
  ];



  constructor(private listService: ListService) { }

  ngOnInit(): void { }

  atualizaPeople(people: People) {
    console.log('atualizando pessoa')
    /* this.listService.update(this.peoples, people); */
    }
  }

