import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-par',
  templateUrl: './number-par.component.html',
  styleUrls: ['./number-par.component.scss']
})
export class NumberParComponent implements OnInit {
  numberPar: number = 2;

  ngOnInit(): void { }
  constructor() { }

  onChangeNumber(): void {
    this.numberPar = Math.round(this.numberPar * 2)
  }
}
