import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Henrique";
  jogador = 'Cristiano Ronaldo';
  nota = 10;

  title = 'curso-angular';
}
