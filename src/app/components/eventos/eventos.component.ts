import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  show: boolean = false;
  showColorDanger = false;


  constructor() { }

  ngOnInit(): void { }

  showMessage(): void {
    this.show = !this.show; //toogle message
  }
  showColor(): void {
    this.showColorDanger = !this.showColorDanger;

  }
}
