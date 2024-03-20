import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/Anime';

@Component({
  selector: 'app-list-anime-render',
  templateUrl: './list-anime-render.component.html',
  styleUrls: ['./list-anime-render.component.scss']
})
export class ListAnimeRenderComponent implements OnInit {

animes: Anime[] = [];

listAnimes = ''

constructor(private listService: ListService) {
  this.getAnime();

}
ngOnInit(): void {}


showAge(anime: Anime): void {
  this.listAnimes = `O desenho ${anime.name} tem ${anime.age} anos`
}

getAnime(): void {
this.listService.getAllAnime().subscribe((anime) => (this.animes = anime))
}
}

