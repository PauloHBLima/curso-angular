import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;

  ngOnInit(): void {}
  constructor() {}
  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }

}
