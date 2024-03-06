import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''
  @Input() sobrenome: string = ''
  @Input() resultado: number = 0
  @Input() apelido: string = ''

    constructor() { }
  ngOnInit(): void {

  }

}
