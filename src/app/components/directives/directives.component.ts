import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent implements OnInit {
  size = 50;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];
  underline = 'undeline-title';

  constructor() { }
  ngOnInit(): void {

  }
  OnInit(): void { }
}
