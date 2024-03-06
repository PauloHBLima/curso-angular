import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data-second',
  templateUrl: './parent-data-second.component.html',
  styleUrls: ['./parent-data-second.component.scss']
})
export class ParentDataSecondComponent implements OnInit {

  @Input() apelido: string = '';
  @Input() userData!: {email: string; profissao: string; idade: number}
  constructor() {}
  ngOnInit(): void {

  }
}
