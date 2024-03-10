import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number-par',
  templateUrl: './change-number-par.component.html',
  styleUrls: ['./change-number-par.component.scss']
})
export class ChangeNumberParComponent implements OnInit {
  @Output() changeNumberPar: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void { }
  constructor() { }

  handleClickNumber(): void {
    this.changeNumberPar.emit();
  }
}
