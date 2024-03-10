import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventostwo',
  templateUrl: './eventostwo.component.html',
  styleUrls: ['./eventostwo.component.scss']
})
export class EventostwoComponent implements OnInit {

  show: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show;
  }
}
