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

constructor(private listService: ListService) {
  this.getAnimes();
}
ngOnInit(): void {}

getAnimes(): void {
this.listService.getAllAnime().subscribe((animes) => (this.animes = animes))
}
}

