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
  nomefei = 'ze bonitinho'
  title = 'curso-angular';
  nickName = 'Paulo';
  userData = {
    email: 'paulo@hotmail.com',
  profissao: 'programador',
    idade: 29
  }
}
